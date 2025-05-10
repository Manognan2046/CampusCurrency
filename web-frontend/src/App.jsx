import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


import AuthLayout from "./pages/AuthLayout/AuthLayout";
import Login from "./pages/AuthLayout/Login";
import Signup from "./pages/AuthLayout/Signup";
import Verification from "./pages/AuthLayout/Verification";
import ResetPassword from "./pages/AuthLayout/ResetPassword";

import HomeLayout from "./pages/Home/HomeLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="verification" element={<Verification />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="home" element={<HomeLayout />}>
        </Route>
    </Routes>
  );
}

export default App;
