import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../detailsStyles.module.css";

const RenewAttr = () => {
  return (
    <div style={{ marginTop: "64px" }}>
      <h2 className={`${styles.mainTitle} mb-4`}>Renew And Equip</h2>
      <div className="row">
        <div className="col-md-4 my-2">
          <div className="position-relative">
            <img
              src="/WashAndPolish.webp"
              className={`${styles.attImage} img-fluid`}
              alt="wash"
            />
            <div className={styles.attSection}>
              <p className={styles.attText}>Wash And Polish</p>
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="position-relative">
            <img
              src="/PaintInspection.webp"
              className={`${styles.attImage} img-fluid`}
              alt="wash"
            />
            <div className={styles.attSection}>
              <p className={styles.attText}>Wash And Polish</p>
              <div></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2 text-center">
          <div className="position-relative">
            <img
              src="/PaintInspection.webp"
              className={`${styles.attImage} img-fluid`}
              alt="wash"
            />
            <div className={styles.attSection}>
              <p className={styles.attText}>Wash And Polish</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button className={styles.moreBtn} style={{ fontSize: "17px" }}>
          Disclaimer
        </Button>
      </div>
    </div>
  );
};

export default RenewAttr;
