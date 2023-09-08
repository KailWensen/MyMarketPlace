import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import axios from "axios";
import { Checkbox } from "antd";
const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);

  // get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  //filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"Homepage - MyMarketPlace"}>
      <div className="row mt-3">
        <div className="col-md-2">
          <h4 className="text-center">Filter By Category:</h4>
          <div className="d-flex flex-column m-2">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          <h4 className="text-center">Filter By Price:</h4>
          <div className="d-flex flex-column m-2"></div>
        </div>
        {JSON.stringify(checked, null, 4)}
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-image/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <button href="#" class="btn btn-primary ms-1">
                    Details
                  </button>
                  <button href="#" class="btn btn-secondary ms-1">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
