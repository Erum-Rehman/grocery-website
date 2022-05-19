import React from "react";
import { Navigate , Route } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return (
      !isAuthenticated ? <Navigate to="/login" replace /> : children 
  );
}

export default ProtectedRoute;