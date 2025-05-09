import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
    const location = useLocation();
    const isSignup = location.pathname.includes("signup");
  
    return (
      <>
        <div className={`login-container ${isSignup ? 'signup-container' : ''}`}>
          <Outlet />
        </div>
      </>
    );
}

export default AuthLayout;