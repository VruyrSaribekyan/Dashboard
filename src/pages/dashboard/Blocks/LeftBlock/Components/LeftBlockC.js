import React from "react";
import ComposedCharter from "../../../../../charters/ComposedCharter";
import styles from "./LBCcomponents.module.css";

export default function LeftBlockC() {
  return (
    <>
      <div className={styles.containerC}>
        <p>CHART TITLE</p>
        <div className={styles.composedCharter}>
          <ComposedCharter />
        </div>
      </div>
    </>
  );
}
