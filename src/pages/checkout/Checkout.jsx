import React from "react";
import "./Checkout.css";
function Checkout() {
  return (
    <div className="checkoutPage">
      <div className="container">
        <div className="pageWay">
          <p>Home</p>
          <p>/</p>
          <p>My Account</p>
          <p>/</p>
          <p>Product</p>
          <p>/</p>
          <p>View Cart</p>
          <p>/</p>
          <p className="activePage">My Account</p>
        </div>
        <div className="mainContent">
          <div className="details">
            <h2 className="formTitle">Billing Details</h2>
            <form action="#">
              <div className="formItem">
                <label htmlFor="">First Name*</label>
                <input type="text" />
              </div>
              <div className="formItem">
                <label htmlFor="">Company Name</label>
                <input type="text" />
              </div>
              <div className="formItem">
                <label htmlFor="">Street Address*</label>
                <input type="text" />
              </div>
              <div className="formItem">
                <label htmlFor="">Apartment, floor, etc. (optional)</label>
                <input type="text" />
              </div>
              <div className="formItem">
                <label htmlFor="">Town/City*</label>
                <input type="text" />
              </div>
              <div className="formItem">
                <label htmlFor="">Phone Number*</label>
                <input type="text" />
              </div>
              <div className="formItem">
                <label htmlFor="">Email Address*</label>
                <input type="text" />
              </div>
              <div className="check">
                <input type="checkbox" />
                <p>Save this information for faster check-out next time </p>
              </div>
            </form>
          </div>
          <div className="checkoutProducts">
            <div className="orderProducts">
              <div className="orderProductItem">
                <div className="orderProductData">
                  <div className="productItemImg">
                    <img src="/public/card1.1.png" alt="" />
                  </div>
                  <p>LCD Monitor</p>
                </div>
                <p>$650</p>
              </div>
              <div className="orderProductItem">
                <div className="orderProductData">
                  <div className="productItemImg">
                    <img src="/public/card1.3.png" alt="" />
                  </div>
                  <p>H1 Gamepad</p>
                </div>
                <p>$650</p>
              </div>
            </div>
            <div className="calculateProducts">
              <div className="rowCalculate">
                <p>Subtotal:</p>
                <p>$1750</p>
              </div>
              <div className="rowCalculate">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="rowCalculate rowactive">
                <p>Total:</p>
                <p>$1750</p>
              </div>
            </div>
            <div className="bank">
              <div className="BankRadio">
                <div>
                  <input type="radio" name="bank" />
                </div>
                <div>
                  <p>
                    Bank
                  </p>
                </div>
              </div>
              <div>
                <img src="/public/Frame 834.svg" alt="" />
              </div>
            </div>
            <div className="cash">
              <div className="BankRadio">
                <div>
                  <input type="radio" name="bank" />
                </div>
                <div>
                  <p>
                    Cash on delivery
                  </p>
                </div>
              </div>
            </div>
            <div className="CartCupon">
              <div>
                <input type="text" placeholder='Coupon Code' />
              </div>
              <div>
                <button>
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="Place">
              <button>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
