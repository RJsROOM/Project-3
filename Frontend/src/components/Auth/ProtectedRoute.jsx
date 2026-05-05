import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRole, children }) => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  if (!token || !storedUser) {
    return <Navigate to="/" replace />;
  }

  let user = null;

  try {
    user = JSON.parse(storedUser);

    if (user.role === "member") {
      user.role = "employee";
      localStorage.setItem("user", JSON.stringify(user));
    }
  } catch {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return <Navigate to="/" replace />;
  }

  if (user.role !== "admin" && user.role !== "employee") {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return <Navigate to="/" replace />;
  }

  if (user.role !== allowedRole) {
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    }

    if (user.role === "employee") {
      return <Navigate to="/employee" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
