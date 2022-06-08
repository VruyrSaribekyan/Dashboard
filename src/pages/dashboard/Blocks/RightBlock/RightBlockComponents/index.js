import React from "react";
import RightBlockA from "./RightBlockA";
import RightBlockB from "./RightBlockB";
import RightBlockC from "./RightBlockC";
import styles from "./RBcomponents.module.css";
export default function RightBlockComponents() {
  return (
    <div className={styles.container}>
      <RightBlockA />
      <RightBlockB />
      <RightBlockC />
    </div>
  );
}
