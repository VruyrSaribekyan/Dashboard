import React from "react";
import LeftBlockComponents from "./Components";
import styles from "./LeftBlock.module.css";
export default function LeftBlock() {
  return (
    <div className={styles.container}>
      <LeftBlockComponents />
    </div>
  );
}
