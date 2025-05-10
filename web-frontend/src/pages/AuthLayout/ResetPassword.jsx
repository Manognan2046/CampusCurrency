import InputField from "../../components/InputField";

import styles from "../../styles/AuthLayout/resetpassword.module.css";

const ResetPassword = () => {
  return (
    <>
      <h2 className={styles.resetHeader}>Reset Password</h2>

      <form className={styles.resetForm}>
        <InputField type="password" placeholder="New Password" icon="key" />
        <InputField type="password" placeholder="Retype Password" icon="key" />

        <button type="submit" className={styles.resetButton}>
          Reset
        </button>
      </form>
    </>
  );
};

export default ResetPassword;
