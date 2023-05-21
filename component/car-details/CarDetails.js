import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Faq from "./carAttr/Faq";
import SideBarSection from "./additionalAttr/SideBarSection";
import MainDetails from "./carAttr/MainDetails";
import styles from "./detailsStyles.module.css";
const CarDetails = ({ productDetail, productImages }) => {
  return (
    <>
      <div className="container">
        <Breadcrumb className="mt-3 mb-0">
          <li className="breadcrumb-item">
            <a className={styles.customBreadCrumb} href="./">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className={styles.customBreadCrumb} href="#">
              Used car for sale
            </a>
          </li>
          <li className={`${styles.customBreadCrumb} breadcrumb-item active`}>
            Odi A8 2016
          </li>
        </Breadcrumb>
        <div className="row">
          <div className="col-md-8">
            <MainDetails
              productDetail={productDetail}
              productImages={productImages}
            />
          </div>
          <div className="col-md-4 position-sticky">
            <SideBarSection />
          </div>
        </div>
      </div>
      <Faq />
    </>
  );
};

export default CarDetails;
