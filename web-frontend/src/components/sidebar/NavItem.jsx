import { Link } from "react-router-dom";

import styles from "../../styles/Components/sidebar/navItem.module.css";

const NavItem = ({ icon, text, link, active }) => {
  const isLogout = text.toLowerCase() === "logout" || link.includes("logout");

  return (
    <Link to={link}>
      <div
        className={`${styles.navItem} ${active ? styles.active : ""} ${
          isLogout ? styles.logout : ""
        }`}
      >
        <span className={`material-symbols-rounded ${styles.inputIcon}`}>
          {icon}
        </span>
        <span className={styles.navText}>{text}</span>
      </div>
    </Link>
  );
};

export default NavItem;
