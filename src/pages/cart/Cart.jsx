import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { link } from "../../config";
import { toast } from "react-toastify";

function Cart({ getCartProducts, cartProducts }) {
  const totalPrice = cartProducts?.cart_items?.reduce(
    (sum, item) => sum + item.subtotal,
    0
  );

  // delete product function
  const deleteCartProduct = (id) => {
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

    fetch(`${link}/order/remove-from-cart?cart_item_id=${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        getCartProducts();
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    window.scrollTo({
      top: "0",
    });
  });
  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="pageWay">
            <p>Home</p>
            <p>/</p>
            <p className="activePage">Cart</p>
          </div>
          <div className="cartTitle">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="cartProductsBlock">
            {cartProducts?.cart_items.map((item) => {
              return (
                <Link to={`/oneProduct/${item.product_id}`}>
                  <div className="cartBoxs">
                    <div className="cartBoxImg">
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          deleteCartProduct(item.id);
                          toast.success(
                            "Mahsulot savatchadan muvaffaqiyatli o'chirildi!"
                          );
                        }}
                        className="Cartcancel"
                      >
                        <img src="/public/icon-cancel.svg" alt="" />
                      </div>
                      <div>
                        <img src={`${link}/${item.pictures[0].file}`} alt="" />
                      </div>
                      <div>
                        <p>{String(item.title).slice(0, 23)}</p>
                      </div>
                    </div>
                    <div className="cartBoxPrice">
                      <p>{item.discount_price}</p>
                    </div>
                    <div className="cartBoxInput">
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={item.quantity}
                      />
                    </div>
                    <div className="cartBoxSubtotal">
                      <p>{item.subtotal}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

      
          <div className="cartBlock">
            <div className="CartCupon">
              <div>
                <input type="text" placeholder="Coupon Code" />
              </div>
              <div>
                <button>Apply Coupon</button>
              </div>
            </div>
            <div className="cartTotal">
              <h3>Cart Total</h3>
              <div className="cartTotalSub">
                <p>Subtotal:</p>
                <p>{totalPrice}</p>
              </div>
              <div className="cartTotalShop">
                <p>Shipping:</p>
                <p>{totalPrice * 0.01}</p>
              </div>
              <div className="cartTotalTotal">
                <p>Total:</p>
                <p>{totalPrice + totalPrice * 0.01}</p>
              </div>
              <Link to={"/checkout"}>
                <button>Procees to checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
