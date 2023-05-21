import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "../../detailsStyles.module.css";

const ReportContent = () => {
  return (
    <>
      <div className={styles.reportContent}>
        <div className="d-flex align-items-center justify-content-center mb-3">
          {" "}
          <Image src="/report-title.svg" width="300" height="80" alt="report" />
        </div>
        <div className="row">
          <div className="col-md-6 my-2">
            <div
              className={`d-flex justify-content-between ${styles.attrInspection}`}
            >
              <div className="d-flex justify-content-between">
                <Image
                  src="/reportIcons/machine.svg"
                  width="24"
                  height="24"
                  alt="machine"
                />
                <p className={`${styles.attributeTitle} ${styles.mainText}`}>
                  machine
                </p>
              </div>
              <div>
                <AiFillCheckCircle size="22px" fill="#5cd49e" />
                <MdOutlineKeyboardArrowRight size="22px" />
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div
              className={`d-flex justify-content-between ${styles.attrInspection}`}
            >
              <div className="d-flex justify-content-between">
                <Image
                  src="/reportIcons/gearBox.svg"
                  width="24"
                  height="24"
                  alt="gear"
                />

                <p className={`${styles.attributeTitle} ${styles.mainText}`}>
                  gearbox
                </p>
              </div>
              <div>
                <AiFillCheckCircle size="22px" fill="#5cd49e" />
                <MdOutlineKeyboardArrowRight size="22px" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            borderTop: "solid 1px #f1f1f1",
          }}
        >
          <Button className={styles.blueBtn}>full inspection report</Button>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between mt-3 flex-wrap">
        <p className={`${styles.mainTex} m-0`}>
          Examination date: 19 Shawwal 1444 | 2023/05/10
        </p>
        <div className="d-flex justify-content-center w-100">
          <Button className={styles.moreBtn} style={{ fontSize: "14px" }}>
            Disclaimer
          </Button>
        </div>
      </div>
    </>
  );
};

export default ReportContent;
