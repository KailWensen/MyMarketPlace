import React, { useState } from "react";
import Layout from "./../../Components/Layout/Layout.js";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../style/AuthStyle.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Forgot Password"}>
      <div className="form-container" style={{ minHeight: "78vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">Reset Password</h4>

          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="-"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name of your birth city?
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Enter your Secret key."
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="-"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
