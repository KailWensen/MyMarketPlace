import React from "react";
import Layout from "../Components/Layout/Layout";
import { BsInfoCircle } from "react-icons/bs";

const About = () => {
  return (
    <Layout title={"About us - MyMarketPlace"}>
      <div className="row contactus " style={{ marginTop: "0px" }}>
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p class="d-flex align-items-center" style={{ padding: "50px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
