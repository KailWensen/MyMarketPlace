import React, { useState } from "react";
import Layout from "./../../Components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../style/AuthStyle.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/Register", {
        name,
        email,
        password,
        phone,
        address,
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
    <Layout title={"Register new user"}>
      <div className="form-container" style={{ minHeight: "78vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">Register New User</h4>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="Name"
              placeholder="-"
              required
            />
          </div>

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
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="-"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="phone"
              placeholder="-"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="address"
              placeholder="-"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Set a backup security key:
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="address"
              placeholder="Name of your birth city?"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
