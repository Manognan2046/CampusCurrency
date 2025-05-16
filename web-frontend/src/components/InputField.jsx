import { useState } from "react";
import styles from "../styles/Components/inputField.module.css";

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className={styles.inputWrapper}>
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className={styles.inputField}
     
      />

      <span className={`material-symbols-rounded ${styles.inputIcon}`}>
        {icon}
      </span>

      {type === "password" && (
        <span
          onClick={() =>
            setIsPasswordShown((isPasswordShown) => !isPasswordShown)
          }
          className={`material-symbols-rounded ${styles.eyeIcon}`}
        >
          {isPasswordShown ? "visibility_off" : "visibility"}
        </span>
      )}
    </div>
  );
};

export default InputField;
