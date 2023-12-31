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
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-image/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="500"
            width="350"
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Product Detalis</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Price: {product.price}</h6>
          {/* <h6>Category: {product.category.name}</h6> */}
          <button class="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      <div className="col-md-5">Similar Products</div>
    </Layout>
  );
};

export default ProductDetails;
