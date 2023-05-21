import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "../detailsStyles.module.css";
const ImagesCar = ({ productImages }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const interiorImages = Object.values(productImages?.interior);
  const exteriorImages = Object.values(productImages?.exterior);
  return (
    <div className="slideTab">
      <Tabs
        defaultActiveKey="Interior"
        id="fill-tab-example"
        className="text-center"
        fill
      >
        <Tab
          eventKey="Interior"
          title="Interior"
          className={`${styles.infoBtn} text-center`}
        >
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{ width: "100%", borderRadius: "10px", overflow: "hidden" }}
            indicators={false}
          >
            {interiorImages.map((image, i) => {
              return (
                <Carousel.Item key={i} onClick={() => console.log("carousel")} style={{cursor:"pointer"}}>
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>
                      {" "}
                      {i + 1}/{interiorImages.length}
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Tab>
        <Tab eventKey="Exterior" title="Exterior">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            style={{ width: "100%", borderRadius: "10px", overflow: "hidden" }}
          >
            {exteriorImages.map((image, i) => {
              return (
                <Carousel.Item
                  key={i}
                  onClick={() => console.log("exterior")}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>
                      {" "}
                      {i + 1}/{exteriorImages.length}
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ImagesCar;
