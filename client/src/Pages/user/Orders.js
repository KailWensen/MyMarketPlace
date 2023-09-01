import React from "react";
import Layout from "../../Components/Layout/Layout";
import UserMenu from "../../Components/Layout/UserMenu";

const Orders = () => {
  return (
    <Layout title={"Your Orders - MyMarketPlace"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Your orders</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
