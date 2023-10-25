import { createContext, useReducer, useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
        displayName: action.payload.displayName,
      };
    case "LOGOUT":
      return { ...state, user: null, role: null, displayName: null };
    case "AUTH_IS_READY":
      return {
        user: action.payload.user,
        role: action.payload.role,
        displayName: action.payload.displayName,
        authIsReady: true,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    role: null,
    displayName: null,
    authIsReady: false,
  });

  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      if (user) {
        projectFirestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch({
                type: "AUTH_IS_READY",
                payload: { user, role: doc.data().role, displayName: doc.data().displayName },
              });
            } else {
              console.error("User role document does not exist");
              dispatch({ type: "AUTH_IS_READY", payload: { user, role: null, displayName: null } });
            }
          })
          .catch((error) => {
            console.error("Error fetching user role:", error);
            setAuthError(error);
            dispatch({ type: "AUTH_IS_READY", payload: { user: null, role: null, displayName: null } });
          });
      } else {
        dispatch({ type: "AUTH_IS_READY", payload: { user: null, role: null, displayName: null } });
      }
    });

    return () => unsub(); // Cleanup subscription on unmount
  }, []);
  console.log("AuthContext state:", state);

  return <AuthContext.Provider value={{ ...state, dispatch, authError }}>{children}</AuthContext.Provider>;
};
