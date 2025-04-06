import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { CiLogout, CiStar } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { Skeleton } from "@mui/material";
import { link } from "../../config";
function Navbar({
  userInfo,
  cartProducts,
  getCartProducts,
  setSearchVal,
  likedProducts,
}) {
  const [til, setAge] = React.useState("");
  const [showModal, setShowModal] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigate = useNavigate();
  const closeModal = (e) => {
    !e.target.classList.contains("navModal")
      ? setShowModal(null)
      : setShowModal(true);
  };

  return (
    <div className="navbar">
      <nav>
        <div className="navtop">
          <div className="container">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">til</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={til}
                  label="til"
                  onChange={handleChange}
                >
                  <MenuItem value={"eng"}>English</MenuItem>
                  <MenuItem value={"uz"}>Uzbek</MenuItem>
                  <MenuItem value={"ru"}>Russian</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="mainNav">
          <div className="container">
            <div
              onClick={(e) => {
                closeModal(e);
              }}
              className={showModal ? "modalBack" : "hidden"}
            >
              <div className={showModal ? "navModal" : "hidden"}>
                <Link
                  onClick={() => {
                    setShowModal(false);
                  }}
                  to={"account"}
                  className="modalItem"
                >
                  <FaRegUser />
                  <p>Manage My Account</p>
                </Link>
                <div className="modalItem">
                  <LuShoppingBag />
                  <p>My Order</p>
                </div>
                <div className="modalItem">
                  <CiStar />
                  <p>My Reviews</p>
                </div>
                <div
                  onClick={() => {
                    setShowModal(false);
                    localStorage.setItem("token", "");
                  }}
                  className="modalItem"
                >
                  <CiLogout />
                  <p>Logout</p>
                </div>
              </div>
            </div>
            <Link to={"/"} className="logo">
              <h1>Exclusive</h1>
            </Link>
            <div className="navLinks">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/signup"}>Sign Up</NavLink>
            </div>
            <div className="navBtns">
              <form action="#">
                <input
                  onFocus={() => {
                    navigate("/search");
                  }}
                  onChange={(e) => {
                    setSearchVal(e.target.value);
                  }}
                  type="text"
                  placeholder="What are you looking for?"
                />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <Link to={"/wishlist"}>
                <button>
                  {userInfo?.id && likedProducts?.length > 0 && (
                    <p className="productsLength">{likedProducts?.length}</p>
                  )}
                  <i className="fa-regular fa-heart"></i>
                </button>
              </Link>
              <Link to={"/cart"}>
                <button>
                  {userInfo?.id && cartProducts?.cart_items?.length > 0 && (
                    <p className="productsLength">
                      {" "}
                      {cartProducts?.cart_items?.length}
                    </p>
                  )}
                  <i className="fa fa-shopping-cart"></i>
                </button>
              </Link>

              {userInfo?.id && (
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <AiOutlineUser />
                </button>
              )}
              {!userInfo && (
                <Box sx={{ width: 15 }}>
                  <Skeleton variant="h1" width={25} height={25} />
                </Box>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
