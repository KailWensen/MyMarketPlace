import React from "react";
import Layout from "../Components/Layout/Layout";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
const Contact = () => {
  return (
    <Layout title={"Contact Us - MyMarketPlace"}>
      <div className="row contactus" style={{ marginTop: "0px" }}>
        <div className="col-md-6">
          <img
            src="/images/ContactUs.jpeg"
            alt="contactus"
            style={{
              width: "75%",
              padding: "20px",
              marginLeft: "80px",
            }}
          />
        </div>

        <div className="col-md-4" style={{ padding: "20px" }}>
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US:</h1>
          <p className="text-justify mt-2">
            Feel free to contact us for any query or information about the
            product or our services. (24x7)
          </p>
          <p className="mt-3">
            <AiOutlineMail style={{ width: "25px", height: "25px" }} /> :
            <a href="mailto:example@example.com">example@example.com</a>
          </p>

          <p className="mt-3">
            <FiPhoneCall style={{ width: "25px", height: "25px" }} /> :
            <a href="tel:+1234567890">Call us at +1 (123) 456-7890</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
