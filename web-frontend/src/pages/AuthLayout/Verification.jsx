import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import styles from "../../styles/AuthLayout/verification.module.css";

const Verification = () => {
  return (
    <>
      <h2 className={styles.formTitle}>Verify Account</h2>

      <form className={styles.loginForm}>
        <InputField type="email" placeholder="Email Address" icon="mail" />
        <button type="submit" className={styles.otpButton}>
          Send OTP
        </button>
        <div className={styles.otpText}>
          <InputField type="password" placeholder="OTP" icon="key" />

          <Link to="/reset-password">
            <button
              type="submit"
              className={`${styles.otpButton} ${styles.verifyButton}`}
            >
              Verify
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Verification;
