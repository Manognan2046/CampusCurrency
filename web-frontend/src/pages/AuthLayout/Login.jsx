import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";

import styles from "../../styles/AuthLayout/login.module.css";

const Login = () => {
  const navigate = useNavigate()

  const verify = async (event)=>{
    event.preventDefault();
      const data = {
    email: event.target[0].value,
    password: event.target[1].value
      }
  try {
    const response = await fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  const res = await response.json();
  if(res.verification===true){
    navigate('/home')
  }
  else{
    navigate('/login')
  }
  }
  catch(err){
    console.log(err);
  }

}
  return (
    
    <>

      <h2 className={styles.formTitle}>Log in with</h2>
      <SocialLogin />

      <p className={styles.separator}>
        <span>or</span>
      </p>

      <form onSubmit={verify} className={styles.loginForm}>
        <InputField name="email" type="email" placeholder="Email Address" icon="mail" />
        <InputField name="password" type="password" placeholder="Password" icon="key" />

        <Link to="/verification" className={styles.forgotPasswordLink}>
          Forgot password?
        </Link>
        
    
          <button className={styles.loginButton} type="submit">
            Log In
          </button>
       
      </form>

      <p className={styles.signupPrompt}>
        Don't have an account?{" "}
        <Link to="/signup" className={styles.signupLink}>
          Sign up
        </Link>
      </p>
    </>
  );
};

export default Login;