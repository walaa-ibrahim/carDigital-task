import React, { useEffect, useState } from "react";
import axios from "axios";
import CarDetails from "../../component/car-details/CarDetails";

const Details = ({}) => {
  const [productDetail, setProductDetail] = useState({});
  const [productImages, serProductImages] = useState({
    exterior: {},
    interior: {},
  });

  const getData = async () => {
    const res = await axios.get(`/api/carDetailsData`);
    const data = res.data.initProduct;
    setProductDetail(data);
    serProductImages(data.basicInfo.imageGallery);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
      <CarDetails productDetail={productDetail} productImages={productImages} />
  );
};
//comment on it becouse missing {id of product} that return from link when click on it, that redirect us to this page

// export async function getServerSideProps({ params: { id } }) {
//   const res = await axios.get(`api/carDetailsData`);
//   const data = res.data.initProduct.basicInfo;
//   return {
//     props: {
//       carsProps: data,
//     },
//   };

// }
export default Details;
