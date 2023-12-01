import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, role } = useAuthContext();

  if (!user) {
    // Redirect to login page if user is not logged in
    return <Navigate to="/login" />;
  }

  if (!role || !allowedRoles.includes(role)) {
    return (
      <div>
        {allowedRoles}, {role} Access Denied
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
