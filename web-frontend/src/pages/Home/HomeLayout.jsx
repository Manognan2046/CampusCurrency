import React from "react";
import { Outlet } from "react-router-dom";

import styles from "../../styles/Home/home.module.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header";

const HomeLayout = () => {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
