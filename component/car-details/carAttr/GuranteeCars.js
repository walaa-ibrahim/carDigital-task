import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "../detailsStyles.module.css";

const GuranteeCars = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4 my-2">
          <div className={styles.guranteeContainer}>
            <Image
              src="/check-icon.svg"
              width="50"
              height="50"
              alt="check-icon"
            />
            <p>Examination of more than 100 points</p>
            <Button className={styles.moreBtn}>more</Button>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className={styles.guranteeContainer}>
            <Image
              src="/gurantee-icon.svg"
              width="50"
              height="50"
              alt="gurantee-icon"
            />
            <p>One year or 20,000 km warranty</p>
            <Button className={styles.moreBtn}>more</Button>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className={styles.guranteeContainer}>
            <Image src="/try-icon.svg" width="50" height="50" alt="try-icon" />
            <p>Try it for 10 days, you be able to return it</p>
            <Button className={styles.moreBtn}>more</Button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "40px",
          }}
        >
          <Button className={styles.moreBtn}>
            Learn more about the Warranty Program
          </Button>
        </div>
      </div>
    </>
  );
};

export default GuranteeCars;
