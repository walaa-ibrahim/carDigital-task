import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "../detailsStyles.module.css";

const AddAttributes = () => {
  return (
    <>
      <h2 className={styles.sideBarTitle}>odi A8 2016</h2>
      <p className={`${styles.mainText} ${styles.addLeftBorder}`}>
        Less than <strong>15,000 </strong>km per year
      </p>
      <div className={styles.AddAttributes}>
        <div className="d-flex align-items-center mb-2">
          <p className={styles.AddAttributesText}>used</p>
          <p className={styles.AddAttributesText}>98,796 km</p>
          <p className={styles.AddAttributesText}>Mile Age</p>
        </div>
        <p
          className={styles.AddAttributesText}
          style={{
            background: "#00b362",
            color: "#fff",
          }}
        >
          <Image
            src="/burn.svg"
            width="10"
            height="15"
            alt="burn-img"
            style={{ marginRight: "4px" }}
          />
          <strong>Save 45.000</strong>
        </p>
      </div>
      <div style={{ marginTop: "16px" }}>
        <h3
          style={{
            color: "#484848",
            fontSize: "12px",
            lineHight: "16px",
            marginBottom: "13px",
            fontWeight: 700,
          }}
        >
          The most important features
        </h3>
        <div className="d-flex align-items-center flex-wrap ">
          <p className={styles.impFeature}>Cruise control</p>
          <p className={`${styles.impFeature} d-flex`}>Cooling/seats Cooling</p>
          <p className={styles.impFeature}>rear camera</p>
          <Button
            className={`${styles.moreBtn} px-0`}
            style={{ color: "#164f9c", fontSize: "12px" }}
          >
            more
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddAttributes;
