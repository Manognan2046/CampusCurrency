import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";

import "../../styles/AuthLayout/signup.css";

const Signup = () => {
  return (
    <>
      <h2 className="form-title">signup with</h2>
      <SocialLogin />

      <p className="separator">
        <span>or</span>
      </p>

      <form className="login-form">
        <div className="boxcol">
          <div className="1st-column">
            <InputField type="fname" placeholder="First Name" icon="person" />
            <InputField type="lname" placeholder="Last Name" icon="person" />
            <InputField type="rollno" placeholder="Roll No." icon="id_card" />
          </div>
          <div className="2nd-column">
            <InputField type="email" placeholder="Email Address" icon="mail" />
            <InputField type="password" placeholder="New Password" icon="key" />
            <InputField type="password" placeholder="Retype Password" icon="key" />
          </div>
        </div>

        <button type="submit" className="login-button">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
