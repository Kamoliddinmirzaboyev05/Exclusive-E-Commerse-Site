import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { link } from "../../config";
import { Link } from "react-router-dom";
function Checkout({ cartProducts }) {
  const [company, setCompany] = useState(null);
  const [street_address, setStreetAddress] = useState(null);
  const [apartment, setApartment] = useState(null);
  const [city, setCity] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [paying_amount, setPayingAmount] = useState(null);
  const [coupon_code, setCouponCode] = useState(null);
  const [cart_item_ids, setCartItems] = useState(null);

  const totalPrice = cartProducts?.cart_items?.reduce(
    (sum, item) => sum + item.subtotal,
    0
  );
  const productIds = cartProducts?.cart_items?.map((product) => product.id);
  const createOrder = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const raw = JSON.stringify({
      company,
      street_address,
      apartment,
      city,
      phone,
      email,
      paying_amount: 1,
      payment_type: "cash",
      coupon_code,
      save_data: true,
      cart_item_ids,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${link}/order/create/`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    setCartItems(productIds);
  }, [cartProducts]);
  return (
    <div className="checkoutPage">
      <div className="container">
        <div className="pageWay">
          <p>Home</p>
          <p>/</p>
          <p>Cart</p>
          <p>/</p>
          <p>Product</p>
          <p>/</p>
          <p className="activePage">My Account</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createOrder();
          }}
          className="mainContent"
        >
          <div className="details">
            <h2 className="formTitle">Billing Details</h2>
            <div className="form">
              <div className="formItem">
                <label htmlFor="">Company Name</label>
                <input
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
              <div className="formItem">
                <label htmlFor="">Street Address*</label>
                <input
                  onChange={(e) => {
                    setStreetAddress(e.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
              <div className="formItem">
                <label htmlFor="">Apartment, floor, etc. (optional)</label>
                <input
                  onChange={(e) => {
                    setApartment(e.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
              <div className="formItem">
                <label htmlFor="">Town/City*</label>
                <input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
              <div className="formItem">
                <label htmlFor="">Phone Number*</label>
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
              <div className="formItem">
                <label htmlFor="">Email Address*</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  type="text"
                />
              </div>
              <div className="check">
                <input required type="checkbox" />
                <p>Save this information for faster check-out next time </p>
              </div>
            </div>
          </div>
          <div className="checkoutProducts">
            <div className="orderProducts">
              {cartProducts?.cart_items?.map((product) => {
                return (
                  <div key={product.id} className="orderProductItem">
                    <div className="orderProductData">
                      <div className="productItemImg">
                        <img
                          src={`${link}/${product?.pictures[0].file}`}
                          alt=""
                        />
                      </div>
                      <p>{String(product?.title).slice(0, 45)}</p>
                    </div>
                    <p>{product?.subtotal}</p>
                  </div>
                );
              })}
            </div>
            <div className="calculateProducts">
              <div className="rowCalculate">
                <p>Subtotal:</p>
                <p>{Number(totalPrice).toFixed(2)}</p>
              </div>
              <div className="rowCalculate">
                <p>Shipping:</p>
                <p>{Number(totalPrice * 0.01).toFixed(2)}</p>
              </div>
              <div className="rowCalculate rowactive">
                <p>Total:</p>
                <p>{Number(totalPrice + totalPrice * 0.01).toFixed(2)}</p>
              </div>
            </div>
            <div className="CartCupon">
              <div>
                <input
                  onChange={(e) => {
                    setCouponCode(e.preventDefault());
                  }}
                  type="text"
                  placeholder="Coupon Code"
                />
              </div>
              <div>
                <button>Apply Coupon</button>
              </div>
            </div>
            <div className="Place">
              <button>Place Order</button>
              <Link to={"/orderproducts"}>
                {" "}
                <button>Order List</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
