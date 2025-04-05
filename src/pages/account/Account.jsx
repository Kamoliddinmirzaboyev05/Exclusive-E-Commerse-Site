import React, { useEffect, useState } from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import { link } from "../../config";
import { toast } from "react-toastify";
function Account({ userInfo }) {
  const [first_name, setFirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [address, setAdress] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);

  // writeUserData function

  const writeUserData = () => {
    console.log(userInfo?.first_name);
    setFirstName(userInfo?.first_name);
    setLastName(userInfo?.last_name);
    setAdress(userInfo?.address);
    setEmail(userInfo?.email_or_phone);
  };
  useEffect(() => {
    writeUserData();
  }, [userInfo]);

  // Update UserData function
  const updateUserData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const raw = JSON.stringify({
      first_name,
      last_name,
      email,
      phone,
      address,
      password,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${link}/user/update-profile/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.phone) {
          toast.error(result?.phone[0]);
        } else if (result?.password[0]) {
          toast.error(result?.password[0]);
        } else {
          toast.success("Ma'lumotlar muvaffaqiyatli o'zgartirildi!");
        }
        console.log(result);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="accountPage">
      <div className="container">
        <div className="pageTop">
          <div className="pageWay">
            <p>Home</p>
            <p>/</p>
            <p className="activePage">My Account</p>
          </div>
          <p className="welcomeLink">
            Welcome! <Link>Md Rimel</Link>
          </p>
        </div>
        <div className="mainContent">
          <div className="leftLinks">
            <h2>Manage My Account</h2>
            <div className="leftDataLinks">
              <Link className="active">My Profile</Link>
              <Link>Address Book</Link>
              <Link>My Payment Options</Link>
            </div>
            <h2>My Orders</h2>
            <div className="leftDataLinks">
              <Link>My Returns</Link>
              <Link>My Cancellations</Link>
            </div>
          </div>
          <div className="rightForm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateUserData();
              }}
              action="#"
            >
              <h2 className="formTitle">Edit Your Profile</h2>
              <div className="row">
                <div className="rowItem">
                  <label>First Name</label>
                  <input
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    value={first_name}
                    required
                    type="text"
                    placeholder="Md"
                  />
                </div>
                <div className="rowItem">
                  <label>Last Name</label>
                  <input
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    value={last_name}
                    required
                    type="text"
                    placeholder="Rimel"
                  />
                </div>
              </div>
              <div className="row">
                <div className="rowItem">
                  <label>Email</label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    required
                    type="text"
                    placeholder="rimel1111@gmail.com"
                  />
                </div>
                <div className="rowItem">
                  <label>Address</label>
                  <input
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                    value={address}
                    required
                    type="text"
                    placeholder="Kingston, 5236, United State"
                  />
                </div>
              </div>
              <div className="rowItem phoneInput">
                <label>Phone</label>
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                  type="text"
                  placeholder="+998 (12) 345 67 89"
                />
              </div>
              <div className="passwordChanges">
                <h2>Password Changes</h2>
                <input
                  onChange={(e) => {
                    setPassword(String(e.target.value));
                  }}
                  value={password}
                  type="password"
                  placeholder="New Password"
                />
                <input
                  onChange={(e) => {
                    setPassword(String(e.target.value));
                  }}
                  type="password"
                  placeholder="Confirim New Password"
                />
                <div className="formBtns">
                  <button className="cancelBtn">Cancel</button>
                  <button className="viewBtn">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
