import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Outlet } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
// import AuthContext from "./context/AuthContext.jsx";
// import TaskContext from "./context/TaskContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
// localStorage.clear();

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
