import React from "react";
import ImagesCar from "./ImagesCar";
import Image from "next/image";
import GuaranteeCars from "./GuranteeCars";
import CarInfo from "./carInfo/CarInfo";

const MainDetails = ({ productDetail, productImages }) => {
  return (
    <>
      <ImagesCar productImages={productImages} />
      <div className="text-center py-4 py-md-5">
        <Image
          src="https://d7i1v2l264z8e.cloudfront.net/react/assets/images/uspMainDT.svg"
          width="277"
          height="80"
          alt="placeholder-img"
        />
      </div>
      <GuaranteeCars />
      <CarInfo productDetail={productDetail} />
    </>
  );
};

export default MainDetails;
