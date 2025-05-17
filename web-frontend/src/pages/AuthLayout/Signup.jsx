import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";
import Error from "../../components/Error";

import styles from "../../styles/AuthLayout/login.module.css";

const Signup = () => {
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(true);
  const [message, setMessage] = useState("");

  const signup = async (event) => {
    event.preventDefault();
    const form = event.target;

    const data = {
      fname: form.elements.fname.value,
      lname: form.elements.lname.value,
      password: form.elements.pass.value,
      retypePassword: form.elements.retypePassword.value,
      email: form.elements.email.value,
      rollno: form.elements.rno.value,
      pin: form.elements.pin.value,
      retypePin: form.elements.retypePin.value,
    };

    if (data.password !== data.retypePassword || data.pin !== data.retypePin) {
      setCorrect(false);
      setMessage("Passwords or pins do not match");
      setTimeout(() => setCorrect(true), 2000);
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: data.fname,
          lname: data.lname,
          email: data.email,
          rollno: data.rollno,
          password: data.password,
          pin: data.pin,
        }),
      });

      const res = await response.json();

      if (res.signedup === true) {
        navigate("/login");
      } else {
        setCorrect(false);
        setMessage("Signup failed. Try again.");
        setTimeout(() => setCorrect(true), 2000);
      }
    } catch (err) {
      setCorrect(false);
      setMessage("Internal server error, please try again later");
      setTimeout(() => setCorrect(true), 2000);
    }
  };
  return (
    <>
      <h2 className={styles.formTitle}>Sign up with</h2>
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
              name="pass"
              type="password"
              placeholder="New Password"
              icon="key"
            />
            <InputField
              name="retypePassword"
              type="password"
              placeholder="Retype Password"
              icon="key"
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
              name="rno"
              type="text"
              placeholder="Roll No."
              icon="id_card"
            />
            <InputField
              name="pin"
              type="password"
              placeholder="Wallet Pin"
              icon="key"
            />
            <InputField
              name="retypePin"
              type="password"
              placeholder="Retype Wallet Pin"
              icon="key"
            />
          </div>
        </div>
        <Error correct={correct} message={message} />

        <button type="submit" className={styles.loginButton}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
