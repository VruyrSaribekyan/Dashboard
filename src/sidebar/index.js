import React from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.css";
import { FiSettings, FiUser,FiShoppingCart,FiBarChart2,FiMessageCircle, FiInfo } from "react-icons/fi";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>YOUR LOGO</div>
      <nav className={styles.menu}>
        <Link to="/">
          <FiBarChart2 /> Dashboard
        </Link>
        <hr color="gainsboro" />
        <Link to="/orders">
          <FiShoppingCart />
          Orders
        </Link>
        <hr color="gainsboro" />

        <Link to="/account">
          <FiUser />
          Account
        </Link>
        <hr color="gainsboro" />

        <Link to="/settings">
          <FiSettings />
          Settings
        </Link>
        <hr color="gainsboro" />
        <div className={styles.support}>
          <p>Support</p>
          <Link to="/chat">
            <FiMessageCircle />
            Chat
          </Link>

          <Link to="/faq">
            <FiInfo />
            FAQ
          </Link>
        </div>
      </nav>
    </div>
  );
}
