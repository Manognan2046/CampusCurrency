import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputField from "../../components/InputField";
import styles from "../../styles/AuthLayout/verification.module.css";

const Verification = () => {
  const navigate = useNavigate();
  const [em, SetEmail] = useState("");
  const sendotp = async (email) => {
    const data = {
      email: email,
    };
    const response = await fetch("/api/sendotp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  const verifyotp = async (email, otp) => {
    const data = {
      email: email,
      otp: otp,
    };
    const response = await fetch("/api/verifyotp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (res.verified == true) {
      navigate("/reset-password");
    } else {
      navigate("/verification");
    }
  };

  const Otp = async (event) => {
    event.preventDefault();
    let email;
    let otp;

    if (event.target[0].value.length > 6) {
      SetEmail(event.target[0].value);
      await sendotp(event.target[0].value);
    } else {
      otp = event.target[0].value;
      email = em;
      await verifyotp(email, otp);
    }
  };

  return (
    <>
      <h2 className={styles.formTitle}>Verify Account</h2>

      <form className={styles.loginForm} onSubmit={Otp}>
        <InputField type="email" placeholder="Email Address" icon="mail" />
        <button type="submit" className={styles.otpButton}>
          Send OTP
        </button>
      </form>
      <form className={styles.loginForm} onSubmit={Otp}>
        <InputField
          type="password"
          required={false}
          placeholder="OTP"
          icon="key"
        />

        <button
          type="submit"
          className={`${styles.otpButton} ${styles.verifyButton}`}
        >
          Verify
        </button>
      </form>
    </>
  );
};

export default Verification;
