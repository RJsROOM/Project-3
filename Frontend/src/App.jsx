import React from "react";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const getStoredUser = () => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  try {
    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.role === "member") {
      parsedUser.role = "employee";
      localStorage.setItem("user", JSON.stringify(parsedUser));
    }

    if (parsedUser.role !== "admin" && parsedUser.role !== "employee") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return null;
    }

    return parsedUser;
  } catch {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return null;
  }
};

const App = () => {
  const handleLogin = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        return res.data.user;
      }
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const user = getStoredUser();
  let homeRoute = "/";

  if (user?.role === "admin") {
    homeRoute = "/admin";
  }

  if (user?.role === "employee") {
    homeRoute = "/employee";
  }

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to={homeRoute} replace /> : <Login handleLogin={handleLogin} />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to={homeRoute} replace /> : <Register />}
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee"
        element={
          <ProtectedRoute allowedRole="employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
