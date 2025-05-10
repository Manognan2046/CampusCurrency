import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";

import styles from "../../styles/AuthLayout/login.module.css";

const Signup = () => {
  return (
    <>
      <h2 className={styles.formTitle}>Sign up with</h2>
      <SocialLogin />

      <p className={styles.separator}>
        <span>or</span>
      </p>

      <form className={styles.loginForm}>
        <div className={styles.boxcol}>
          <div className={styles.column1}>
            <InputField type="text" placeholder="First Name" icon="person" />
            <InputField type="text" placeholder="Last Name" icon="person" />
            <InputField type="text" placeholder="Roll No." icon="id_card" />
          </div>
          <div className={styles.column2}>
            <InputField type="email" placeholder="Email Address" icon="mail" />
            <InputField type="password" placeholder="New Password" icon="key" />
            <InputField
              type="password"
              placeholder="Retype Password"
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
