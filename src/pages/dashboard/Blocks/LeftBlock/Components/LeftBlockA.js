import React from "react";
import styles from "./LBCcomponents.module.css";
export default function LeftBlockA() {
  return (
    <>
      <div className={styles.containerA}>
        <div className={styles.textContainer}>
          <span>Welcome to your dashboard!</span>
          <p>
            Try our new Admin Dashboard Template, build with live Ant-Design
            components. Customize it to your needs and release to production!
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img style={{ width: "75%" }} src="rightColumnImg.png" alt="" />
        </div>
      </div>
    </>
  );
}
