import React from "react";
import Layout from "../../Components/Layout/Layout";
import AdminMenu from "../../Components/Layout/AdminMenu";

const Users = () => {
  return (
    <Layout title={"Admin - User Control"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>User Control</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
