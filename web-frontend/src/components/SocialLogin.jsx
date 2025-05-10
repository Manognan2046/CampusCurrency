import googleIcon from "../assets/google.svg";
import appleIcon from "../assets/apple.svg";

import styles from "../styles/Components/sociallogin.module.css";

const SocialLogin = () => {
  return (
    <div className={styles.socialLogin}>
      <button className={styles.socialButton}>
        <img src={googleIcon} alt="Google" className={styles.socialIcon} />
        Google
      </button>
      <button className={styles.socialButton}>
        <img src={appleIcon} alt="Apple" className={styles.socialIcon} />
        Apple
      </button>
    </div>
  );
};
export default SocialLogin;
