import InputField from "../../components/InputField";

import "../../styles/AuthLayout/resetpassword.css";

const Login = () => {
  return (
    <>
      <h2 className="form-title reset-header">Reset Password</h2>

      <form className="login-form">
        <InputField type="email" placeholder="New Password" icon="key" />
        <InputField type="password" placeholder="Retype Password" icon="key" />

        <button type="submit" className="reset-button">
          Reset
        </button>
      </form>
    </>
  );
};

export default Login;
