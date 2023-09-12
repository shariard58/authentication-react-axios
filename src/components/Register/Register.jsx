import React, { useState } from "react";
import classes from "./Register.module.css";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState();
  const [Password, setPassWord] = useState();

  const handleApi = () => {
    axios
      .post("https://reqres.in/api/register", {
        email: email,
        password: Password,
      })
      .then((result) => {
        console.log("The data which posted", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div>
          <p>Registration</p>
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
              type="password"
              id="fname"
              name="fname"
              onChange={(e) => setPassWord(e.target.value)}
            ></input>
            {/* <p className={classes.pass}>Forgot Password</p> */}
            <button className={classes.btn} onClick={handleApi}>
              Register
            </button>
            <p className={classes.last}>or Signup using...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
