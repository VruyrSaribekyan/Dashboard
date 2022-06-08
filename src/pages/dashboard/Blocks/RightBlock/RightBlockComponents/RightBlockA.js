import React from "react";
import MiniComposedCharter from "../../../../../charters/MiniComposedChart";
import styles from "./RBcomponents.module.css";
export default function RightBlockA(props) {
  return (
    <>
      <div className={styles.containerA}>
        <div>
          <MiniComposedCharter />
        </div>
      </div>
    </>
  );
}
