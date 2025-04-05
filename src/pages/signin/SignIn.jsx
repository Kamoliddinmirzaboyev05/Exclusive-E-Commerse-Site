import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { link } from "../../config";

function SignIn({ getUserData }) {
  const [email_or_phone, setEmailorPassword] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  // getuser function
  const getUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email_or_phone,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${link}/user/token/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.access);
        if (result.access) {
          localStorage.setItem("token", result.access);
          getUserData();
          toast.success("Tizimga muvaffaqiyatli kirdingiz!");
          navigate("/");
        } else {
          toast.error("Email yoki parol noto'g'ri!");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="signIn">
        <div className="container">
          <div className="signInImg">
            <img src="/Side Image (1).png" alt="" />
          </div>
          <div></div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getUser();
            }}
            action="#"
          >
            <div className="signInText">
              <h1>Log in to Exclusive</h1>
              <p>Enter your details below</p>
              <input
                onChange={(e) => {
                  setEmailorPassword(e.target.value);
                }}
                type="text"
                placeholder="Email or Phone Number"
              />
              <br />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                placeholder="Password"
              />
              <br />
              <div className="signInIcon">
                <div>
                  <button>Log In</button>{" "}
                </div>
                <div>
                  <p>Forget Password?</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
