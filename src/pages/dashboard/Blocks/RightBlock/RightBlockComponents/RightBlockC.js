import React from "react";
import AroundCharter from "../../../../../charters/AroundCharter";
import styles from "./RBcomponents.module.css";

export default function RightBlockC() {
  return (
    <>
      {" "}
      <div className={styles.containerC}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "97%",
              position: "relative",
              top: 8,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              CHART TITLE
            </span>
            <span
              style={{
                fontSize: 12,
              }}
            >
              1.10% Since yesterday
            </span>{" "}
          </div>
        </div>
        <div>
          <AroundCharter />
        </div>
      </div>
    </>
  );
}
