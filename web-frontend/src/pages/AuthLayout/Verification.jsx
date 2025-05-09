import { Link } from "react-router-dom";

import InputField from "../../components/InputField";

import "../../styles/AuthLayout/verification.css";

const Login = () => {
  return (
    <>
      <h2 className="form-title">Verify Account</h2>

      <form className="login-form">
        <InputField type="email" placeholder="Email Address" icon="mail" />
        <button type="submit" className="otp-button">
          Send OTP
        </button>
        <InputField type="password" placeholder="OTP" icon="key" />

        <Link to="/reset-password">
          <button type="submit" className="otp-button verify-button">
            Verify
          </button>
        </Link>
      </form>
    </>
  );
};

export default Login;
