import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "../detailsStyles.module.css";

const PaymentTabs = () => {
  return (
    <div className={styles.paymentSec}>
      <Tabs
        defaultActiveKey="cash"
        id="fill-tab-example"
        className="text-center"
        fill
      >
        <Tab
          eventKey="cash"
          title="cash"
          className="text-center"
          style={{ background: "#fff", padding: "16px" }}
        >
          <p
            style={{
              color: " #00b362",
              fontSize: "26px",
              lineHeight: "32px",
            }}
          >
            <strong>1000$</strong>
          </p>
          <p
            style={{
              osition: "relative",
              marginTop: "11px",
              color: "#697a8f",
              fontSize: "16px",
              lineHight: "22px",
              marginBottom: "8px",
            }}
          >
            <strong>999</strong>$
          </p>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Image
              src="/GreyCheck.svg"
              width="14"
              height="14"
              alt="gray-verify"
            />
            <p style={{ color: "#6d7a8d", fontSize: "11px" }}>
              The price includes the added tax
            </p>
          </div>
          <button
            className={styles.btnGreen}
            style={{
              width: "100%",
              height: "48px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Link
              href="#"
              style={{
                color: "#fff !important",
                background: "transparent",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Book it now
            </Link>
          </button>
          <Button className={styles.btnWhite}>Call Us Now</Button>
          <Button className={styles.buyCar}>
            How do you buy your car from a car?
          </Button>
        </Tab>
        <Tab
          eventKey="installment"
          title="Installment"
          className="text-center"
          style={{ background: "#fff", padding: "16px" }}
        >
          <p
            style={{
              color: "#00b362",
              fontSize: "20px",
              lineHeight: "32px",
            }}
          >
            <strong>100$</strong>
            <span style={{ fontSize: "13px" }}> monthly</span>
          </p>

          <p style={{ color: "#6d7a8d", fontSize: "11px" }}>
            This price is an estimate and includes comprehensive car insurance{" "}
          </p>
          <div
            className="d-flex justify-content-between align-items-center p-3 my-3"
            style={{ background: "#f1f7ff" }}
          >
            <div>
              <p className="mb-2">Inst Period</p>
              <p style={{ color: "#6d7a8d", fontSize: "15px" }}>60 month</p>
            </div>
            <div>
              <p className="mb-2">The first</p>
              <p style={{ color: "#6d7a8d", fontSize: "15px" }}>0</p>
            </div>
            <div>
              <p className="mb-2">The last</p>
              <p style={{ color: "#6d7a8d", fontSize: "15px" }}>60$</p>
            </div>
          </div>
          <Button className={styles.buyCar}>
            How do you buy your car from a car?
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PaymentTabs;
