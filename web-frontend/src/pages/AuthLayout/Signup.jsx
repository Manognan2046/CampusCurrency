import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";

import styles from "../../styles/AuthLayout/login.module.css";

const Signup = () => {
  const navigate = useNavigate();
  const signup = async (event) => {
    event.preventDefault();
    const data = {
      fname: event.target[0].value,
      lname: event.target[1].value,
      email: event.target[3].value,
      rollno: event.target[2].value,
      password: event.target[4].value,
      pin: event.target[6].value,
    };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      if (res.signedup === true) {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2 className={styles.formTitle}>Sign up with XD</h2>
      <SocialLogin />

      <p className={styles.separator}>
        <span>or</span>
      </p>

      <form className={styles.loginForm} onSubmit={signup}>
        <div className={styles.boxcol}>
          <div className={styles.column1}>
            <InputField
              name="fname"
              type="text"
              placeholder="First Name"
              icon="person"
            />
            <InputField
              name="lname"
              type="text"
              placeholder="Last Name"
              icon="person"
            />
            <InputField
              name="rno"
              type="text"
              placeholder="Roll No."
              icon="id_card"
            />
          </div>
          <div className={styles.column2}>
            <InputField
              name="email"
              type="email"
              placeholder="Email Address"
              icon="mail"
            />
            <InputField
              name="pass"
              type="password"
              placeholder="New Password"
              icon="key"
            />
            <InputField
              type="password"
              placeholder="Retype Password"
              icon="key"
            />
            <InputField
              name="pin"
              type="password"
              placeholder="Wallet pin"
              icon="key"
            />
          </div>
        </div>

        <button type="submit" className={styles.loginButton}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
