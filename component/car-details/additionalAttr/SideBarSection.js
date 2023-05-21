import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import CashTabs from "./cashTabs";
import AddAttributes from "./AddAttributes";
import Advertisement from "./Advertisement";

const BarSide = () => {
  const [iconClicked, setIconClicked] = useState(false);
  return (
    <>
      <AddAttributes />
      <CashTabs />
      <div className="d-flex justify-content-between align-items-center my-2">
        <div className="d-flex align-items-center">
          <Button
            onClick={() => setIconClicked(!iconClicked)}
            style={{
              background: "transparent",
              borderColor: "transparent",
              padding: 0,
            }}
          >
            <FaRegHeart size="22px" fill={!iconClicked ? "#484848" : "red"} />
          </Button>
          <p style={{ color: "#484848", paddingLeft: "7px" }}>
            add to favourites
          </p>
        </div>
        <div className="d-flex align-items-center">
          <Button
            style={{
              background: "transparent",
              borderColor: "transparent",
              padding: 0,
            }}
          >
            <BsShareFill size="16px" fill="#484848" />
          </Button>
          <p style={{ color: "#484848", paddingLeft: "7px" }}>share</p>
        </div>
      </div>
      <Advertisement />
    </>
  );
};

export default BarSide;
