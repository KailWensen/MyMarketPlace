import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  //initial Product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container">
        <div className="col-md-5">Image</div>
        <div className="col-md-5">Details</div>
      </div>
      <div className="col-md-5">Similar Products</div>
    </Layout>
  );
};

export default ProductDetails;
