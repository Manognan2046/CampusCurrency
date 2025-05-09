import { Link } from "react-router-dom";

import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";

import "../../styles/AuthLayout/login.css";

const Login = () => {
  return (
    <>
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />

      <p className="separator">
        <span>or</span>
      </p>

      <form className="login-form">
        <InputField type="email" placeholder="Email Address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="key" />

        <Link to="/verification" className="forgot-password-link">
          Forgot password?
        </Link>

        <button type="submit" className="login-button">
          Log In
        </button>
      </form>

      <p className="signup-prompt">
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default Login;
