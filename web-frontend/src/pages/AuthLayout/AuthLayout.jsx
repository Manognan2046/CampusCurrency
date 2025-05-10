import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import styles from "../../styles/AuthLayout/login.module.css";
import styles2 from "../../styles/AuthLayout/signup.module.css";

const AuthLayout = () => {
  const location = useLocation();
  const isSignup = location.pathname.includes("signup");

  useEffect(() => {
    document.body.classList.add("auth-page");
    return () => {
      document.body.classList.remove("auth-page");
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.loginContainer} ${
          isSignup ? styles2.signupContainer : ""
        }`}
      >
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
