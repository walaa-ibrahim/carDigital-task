import React from "react";
import Image from "next/image";
import styles from "../../detailsStyles.module.css";

const FeatureInfo = ({
  productDetail,
  featureName,
  featureIcon,
  iconAvilable,
}) => {
  return (
    <div className={`d-flex align-items-center ${styles.infoLabel}`}>
      {iconAvilable ? (
        featureIcon
      ) : (
        <Image src={featureIcon} width="16" height="16" alt="feature-icon" />
      )}
      <p className=" mx-2">{featureName}:</p>
      <strong>{productDetail.basicInfo?.[`${featureName}`]}</strong>
    </div>
  );
};

export default FeatureInfo;
