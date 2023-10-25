import { createContext, useReducer, useEffect } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true, role: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
    role: null,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user + "yes");
        projectFirestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const role = doc.data().role;
              dispatch({ type: "AUTH_IS_READY", payload: { user, role } });
            } else {
              console.error("User document does not exist in Firestore");
              dispatch({
                type: "AUTH_IS_READY",
                payload: { user, role: null },
              });
            }
          })
          .catch((error) => {
            console.error("Error fetching user data from Firestore:", error);
            dispatch({ type: "AUTH_IS_READY", payload: { user, role: null } });
          })
          .finally(() => {
            unsub();
          });
      } else {
        dispatch({
          type: "AUTH_IS_READY",
          payload: { user: null, role: null },
        });
        unsub();
      }
    });
  }, [dispatch]);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
