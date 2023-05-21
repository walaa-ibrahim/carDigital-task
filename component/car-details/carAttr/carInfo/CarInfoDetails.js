import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { infoFeatures } from "../../../../utilies/infoFeatures";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  saftyFeatures,
  comfortFeatures,
  technologiesFeatures,
} from "../../../../utilies/feature";
import FeatureInfo from "./FeatureInfo";
import styles from "../../detailsStyles.module.css";

const CarInfoDetails = ({ productDetail, sectionId }) => {
  return (
    <div id={sectionId}>
      <h2 className={`${styles.mainTitle} mt-2 mb-1`}>Car Information</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Car Information</Accordion.Header>
          <Accordion.Body>
            <div className="row">
              {infoFeatures.map((feature, i) => (
                <>
                  <div
                    className="col-md-6"
                    key={i}
                    style={{
                      borderTop: "1px solid #ebeeee",
                      padding: "12px 0",
                    }}
                  >
                    <FeatureInfo
                      productDetail={productDetail}
                      featureName={feature.featureName}
                      featureIcon={feature.featureIcon}
                      iconAvilable={feature.iconAvilable}
                    />
                  </div>
                </>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Safety</Accordion.Header>
          <Accordion.Body>
            {saftyFeatures.map((feature, i) => (
              <>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ borderTop: "1px solid #ebeeee" }}
                >
                  <p
                    key={i}
                    className={`${styles.featureText} ${styles.mainText}`}
                  >
                    {feature}
                  </p>
                  {productDetail.safetyFeatures?.[
                    `${feature.replace(/ /g, "")}`
                  ] ? (
                    <AiFillCheckCircle size="22px" fill="#5cd49e" />
                  ) : (
                    <AiFillCloseCircle size="22px" fill="#ef5151" />
                  )}
                </div>
              </>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Comforts</Accordion.Header>
          <Accordion.Body>
            {comfortFeatures.map((feature, i) => (
              <>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ borderTop: "1px solid #ebeeee" }}
                >
                  <p
                    key={i}
                    className={`${styles.featureText} ${styles.mainText}`}
                  >
                    {feature}
                  </p>
                  {productDetail.comfortFeatures?.[
                    `${feature.replace(/ /g, "")}`
                  ] ? (
                    <AiFillCheckCircle size="22px" fill="#5cd49e" />
                  ) : (
                    <AiFillCloseCircle size="22px" fill="#ef5151" />
                  )}
                </div>
              </>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>techniques</Accordion.Header>
          <Accordion.Body>
            {technologiesFeatures.map((feature, i) => (
              <>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ borderTop: "1px solid #ebeeee" }}
                >
                  <p
                    key={i}
                    className={`${styles.featureText} ${styles.mainText}`}
                  >
                    {feature}
                  </p>
                  {productDetail.technologiesFeatures?.[
                    `${feature.replace(/ /g, "")}`
                  ] ? (
                    <AiFillCheckCircle size="22px" fill="#5cd49e" />
                  ) : (
                    <AiFillCloseCircle size="22px" fill="#ef5151" />
                  )}
                </div>
              </>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default CarInfoDetails;
