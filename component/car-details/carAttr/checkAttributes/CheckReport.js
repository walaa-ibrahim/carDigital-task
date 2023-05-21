import React from "react";
import CheckReportDetails from "./CheckReportDetails";
const CheckReport = ({ sectionId }) => {
  return (
    <>
      <div
        style={{
          marginTop: "40px",
          paddingTop: "40px",
          borderTop: "2px solid #f1f1f1",
        }}
        id={sectionId}
      >
        <CheckReportDetails />
      </div>
    </>
  );
};

export default CheckReport;
