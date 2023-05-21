import React from "react";
import Image from "next/image";
import ReportContent from "./ReportContent";
import styles from "../../detailsStyles.module.css";

const CheckReportDetails = () => {
  return (
    <div className={styles.reportSection}>
      <h2 className="mb-2">Comprehensive examination</h2>
      <p style={{ color: "#484848", lineHeight: "24px", marginBottom: "32px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <Image
          src="/check-img1.svg"
          width="80"
          height="81"
          alt="check"
          className="m-2"
        />
        <Image
          src="/check-img2.svg"
          width="80"
          height="81"
          alt="check"
          className="m-2"
        />
        <Image
          src="/check-img3.svg"
          width="80"
          height="81"
          alt="check"
          className="m-2"
        />
        <Image
          src="/check-img4.svg"
          width="80"
          height="81"
          alt="check"
          className="m-2"
        />
      </div>
      <ReportContent />
    </div>
  );
};

export default CheckReportDetails;
