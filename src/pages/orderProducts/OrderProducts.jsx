import React, { useEffect, useState } from "react";
import { link } from "../../config";
import "./OrderProducts.css";
function OrderProducts() {
  const [orderList, setOrderList] = useState(null);
  // getOrderList function
  const getOrderList = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://ecommercev01.pythonanywhere.com/order/list/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOrderList(result);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getOrderList();
  }, []);
  return (
    <div className="ordersPage">
      <div className="container">
        {orderList?.map((product) => {
          return (
            <div key={product.id} className="orderProductItem">
              <div className="orderProductData">
                <p>{product.datetime}</p>
                <p>{product.paying_amount}</p>
              </div>
              <p>{product?.subtotal}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderProducts;
