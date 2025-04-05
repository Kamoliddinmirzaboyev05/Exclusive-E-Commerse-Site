import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { link } from "../../config";
function SignUp() {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: "0",
      // behavior: "smooth",
    });
  }, []);
  const newUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      first_name: userName,
      email_or_phone: userEmail,
      password: userPassword,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${link}/user/register/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result?.email_or_phone) {
          toast.error(result?.email_or_phone[0]);
        } else if (result?.password) {
          toast.error(result?.password[0]);
        } else if (result.message) {
          toast.success(result.message);
          navigate("/signin");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="signUp">
        <div className="container">
          <div className="signUpImg">
            <img src="/Side Image (1).png" alt="" />
          </div>
          <div></div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              newUser();
            }}
            action="#"
          >
            <div className="signUpText">
              <h1>Create an account</h1>
              <p>Enter your details below</p>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                type="text"
                placeholder="Name"
              />
              <br />
              <input
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                type="text"
                placeholder="Email or Phone Number"
              />
              <br />
              <input
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                type="text"
                placeholder="Password"
              />
              <br />
              <button className="Account">Create Account</button> <br />
              <button className="google">
                <div>
                  <img src="/Icon-Google.svg" alt="" />
                </div>{" "}
                <div>Sign up with Google</div>
              </button>
              <h5>
                Already have account? <Link to={"/signin"}>Log in</Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
