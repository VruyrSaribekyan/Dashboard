import React from "react";
import LineCharterGreen from "../../../../../charters/LineCharterGreen";
import styles from "./RBcomponents.module.css";

export default function RightBlockB(props) {
  return (
    <>
      <div className={styles.containerB}>
        <div className={styles.chartA}>
          <div className={styles.chartTitle}>
            <span>CHART TITLE</span>
            <span>2,643</span>
            <span>1.10% Since yesterday</span>
          </div>
        </div>
        <div className={styles.chartLine}>
          <LineCharterGreen />
        </div>
      </div>
    </>
  );
}
