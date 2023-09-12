import React, { useState } from "react";
import classes from "./LogIn.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [Password, setPassWord] = useState();
  const handleApi = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: Password,
      })
      .then((result) => {
        console.log("The data which posted", result.data);
        navigate("/inner");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div>
          <p>Login</p>
          <div>
            <label className={classes.label} for="fname">
              Username/email
            </label>{" "}
            <br />
            <input
              className={classes.inputBox}
              type="email"
              id="fname"
              name="fname"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <label className={classes.label} for="fname">
              Password
            </label>{" "}
            <br />
            <input
              className={classes.inputBox}
              type="text"
              id="fname"
              name="fname"
              onChange={(e) => setPassWord(e.target.value)}
            ></input>
            <p className={classes.pass}>Forgot Password</p>
            <button className={classes.btn} onClick={handleApi}>
              Submit
            </button>
            <p className={classes.last}>or Signin using...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
