import React from "react";

const Advertisement = () => {
  return (
    <div
      style={{
        borderTop: "1px solid #d8d8d8",
        borderBottom: "1px solid #d8d8d8",
        padding: "12px 0",
      }}
    >
      <p
        style={{
          color: "#484848",
          lineHeight: "21px",
          marginBottom: 0,
        }}
      >
        Ad number: <strong>159558</strong>
      </p>
      <p
        style={{
          color: "#6c7a8d",
          fontSize: "14px",
          lineHeight: "24px",
          marginTop: "10px",
          marginBottom: 0,
        }}
      >
        (Mention the ad number when contacting customer service)
      </p>
    </div>
  );
};

export default Advertisement;
