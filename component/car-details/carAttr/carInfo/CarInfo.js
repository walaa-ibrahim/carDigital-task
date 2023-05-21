import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CarInfoDetails from "./CarInfoDetails";
import CheckReport from "../checkAttributes/CheckReport";
import Link from "next/link";
import RenewAttr from "../checkAttributes/RenewAttr";
import styles from "../../detailsStyles.module.css";

const CarInfo = ({ productDetail }) => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div>
        <div className={`${styles.infoHeader} py-2`}>
          <Button
            className={`${styles.infoBtn} ${active && styles.btnBorder}`}
            onClick={() => setActive(true)}
          >
            <Link
              href="#info"
              className={` ${active && styles.activeColor} `}
              style={{ color: "#484848" }}
            >
              Car Information
            </Link>
          </Button>
          <Button
            className={`${styles.infoBtn} ${!active && styles.btnBorder}`}
            onClick={() => setActive(false)}
          >
            <Link
              href="#check"
              className={` ${!active && styles.activeColor}`}
              style={{ color: "#484848" }}
            >
              Check Report
            </Link>
          </Button>
        </div>
        <CarInfoDetails productDetail={productDetail} sectionId={"info"} />
        <CheckReport sectionId={"check"} />
      </div>
      <RenewAttr />
    </>
  );
};

export default CarInfo;
