import React from "react";
import Layout from "../Components/Layout/Layout";
import { useAuth } from "../context/auth";

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Homepage - MyMarketPlace"}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <h1 className="text-center">Homepage</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
