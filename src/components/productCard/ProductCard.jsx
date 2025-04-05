import React, { useState } from "react";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { link } from "../../config";
import { toast } from "react-toastify";
function ProductCard({
  product,
  setProductId,
  setShowModal,
  getData,
  userInfo,
  getWishlist,
  liked,
}) {
  // addtoliked function
  const addToLiked = (id) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${link}/action/add-to-wishlist/?product_id=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        toast.success(result.message);
        getData();
      })
      .catch((error) => console.error(error));
  };
  const navigate = useNavigate();
  // Delete from liked function
  const deleteFromLiked = (id) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${link}/action/remove-from-wishlist/?product_id=${id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        toast.info("Maxsulot istaklar ro'yhatidan olib tashlandi!");
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Link to={`/oneProduct/${product.id}`}>
      <div className="productCard">
        <div className="productImgBox">
          <span className="disc">
            <p>
              {(100 - (product.discount_price / product.price) * 100).toFixed(
                0
              )}
              %
            </p>
          </span>
          {!liked && (
            <>
              <div
                onClick={(e) => {
                  if (userInfo.id) {
                    e.preventDefault();
                    addToLiked(product.id);
                  } else {
                    e.preventDefault();
                    navigate("/signup");
                  }
                }}
                className="hoverBtn heartBtn"
              >
                <i
                  className={
                    product.is_liked
                      ? "fa-solid fa-heart"
                      : "fa-regular fa-heart"
                  }
                ></i>
              </div>
              <div className="hoverBtn eyeBtn">
                <i className="fa-regular fa-eye"></i>
              </div>
            </>
          )}
          {liked && (
            <div
              onClick={(e) => {
                e.preventDefault();
                deleteFromLiked(product.id);
                getWishlist();
              }}
              className="deleteBtn hoverBtn"
            >
              <i className="fas fa-trash"></i>
            </div>
          )}
          <div className="productImg">
            <img
              src={`${link}/${product?.pictures[0]}`}
              alt={product?.pictures}
            />
          </div>
          <button
            onClick={(e) => {
              if (userInfo.id) {
                setProductId(product?.id);
                e.preventDefault();
                setShowModal(true);
                getWishlist();
              } else {
                e.preventDefault();
                navigate("/signup");
              }
            }}
            className={liked ? "addCartBtn activeAddCart" : "addCartBtn"}
          >
            Add To Cart
          </button>
        </div>
        <div className="productData">
          <h2>{String(product.title).slice(0, 15)}...</h2>
          <div className="price">
            <p className="newPrice">${product.discount_price}</p>
            <p className="lastPrice">${product.price}</p>
          </div>
          <div className="productRate">
            <img src="/stars].svg" alt="" />
            <p>(88)</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
