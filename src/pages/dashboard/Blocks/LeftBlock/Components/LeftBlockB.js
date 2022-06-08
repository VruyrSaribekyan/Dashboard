import React from "react";
import styles from "./LBCcomponents.module.css";
import LineCharter from "../../../../../charters/LineCharter";
import LineCharterB from "../../../../../charters/LineCharterB";
export default function LeftBlockB(props) {
  return (
    <>
      <div className={styles.containerB}>
        <div className={styles.chartA}>
          <div className={styles.chartTitle}>
            <span>CHART TITLE</span>
            <span>2,643</span>
            <span>1.10% Since yesterday</span>
          </div>
          <div className={styles.chartLine}>
            <LineCharter />
          </div>
        </div>
        <div className={styles.chartA}>
          <div className={styles.chartTitle}>
            <span>CHART TITLE</span>
            <span>2,643</span>
            <span>1.10% Since yesterday</span>
          </div>
          <div className={styles.chartLine}>
            <LineCharterB />
          </div>
        </div>
      </div>
    </>
  );
}
