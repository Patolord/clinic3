import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuthContext();
  console.log(user.user, user.role);
  if (!user) {
    // User not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    // User's role is not allowed, redirect to an unauthorized page or render a message
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleProtectedRoute;
