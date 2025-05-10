import { Link } from "react-router-dom";

import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";

import styles from "../../styles/AuthLayout/login.module.css";

const Login = () => {
  return (
    <>
      <h2 className={styles.formTitle}>Log in with</h2>
      <SocialLogin />

      <p className={styles.separator}>
        <span>or</span>
      </p>

      <form className={styles.loginForm}>
        <InputField type="email" placeholder="Email Address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="key" />

        <Link to="/verification" className={styles.forgotPasswordLink}>
          Forgot password?
        </Link>
        
        <Link to="/home">
          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </Link>
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
