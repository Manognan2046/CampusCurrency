import { useState } from "react";

import NavItem from "./NavItem";

import styles from "../../styles/Components/sidebar/sidebar.module.css";

const Sidebar = () => {
  return (
    <div id="mySidebar" className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoName}>CampusCurrency</div>
      </div>
      <div className={styles.sideMenu}>
        <NavItem icon="home" text="Dashboard" link="/home" active={true} />
        <NavItem icon="person" text="Profile" link="/profile" active={false} />
        <NavItem
          icon="description"
          text="Transactions"
          link="/transactions"
          active={false}
        />
      </div>
      <div className={styles.logout}>
        <NavItem
          icon="power_settings_new"
          text="Logout"
          link="/login"
          active={false}
        />
      </div>
    </div>
  );
};

export default Sidebar;
