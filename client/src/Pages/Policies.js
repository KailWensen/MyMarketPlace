import React from "react";
import Layout from "../Components/Layout/Layout";
import { MdOutlinePolicy } from "react-icons/md";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - MyMarktetPlace"}>
      <div className="row contactus" style={{ marginTop: "0px" }}>
        <div className="col-md-6 mt-6 ">
          <img
            src="/images/PrivacyPolicy.jpeg"
            alt="contactus"
            style={{
              width: "80%",
              padding: "20px",
              marginLeft: "100px",
            }}
          />
        </div>
        <div className="col-md-4 text-center" style={{ padding: "50px" }}>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
