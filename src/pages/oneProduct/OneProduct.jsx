import React, { useEffect, useState } from "react";
import "./OneProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { link } from "../../config";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ProductCard from "../../components/productCard/ProductCard";

function OneProduct({ userInfo, products }) {
  const { id } = useParams();
  const [oneProductData, setOneProductData] = useState(null);
  const [productSize, setProductSize] = useState("M");
  const [productCount, setProductCount] = useState(1);
  const [productLiked, setProductLiked] = useState(false);
  const [productColor, setProductColor] = useState("blue");
  const [descrLength, setDescrLength] = useState(150);
  const [mainImgOrder, setMainImgOrder] = useState(0);

  const navigate = useNavigate();
  // getOneProduct function
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const getOneProduct = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${link}/product/detail/?product_id=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOneProductData(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getOneProduct();
  }, []);

  // Add to Cart function

  const addToCart = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const raw = JSON.stringify({
      product_id: id,
      quantity: productCount,
      properties: {
        color: productColor,
        ...(productSize !== null && { size: productSize }),
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${link}/order/add-to-cart/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        toast.success(result);
      })
      .catch((error) => console.error(error));
  };

  const addToLiked = () => {
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
        // getData();
      })
      .catch((error) => console.error(error));
  };
  console.log(oneProductData);

  return (
    <div className="oneProduct">
      <main>
        <section className="mainSection">
          <div className="container">
            <div className="pageWay">
              <p>Account </p>
              <p>/</p>
              <p>Gaming</p>
              <p>/</p>
              <p className="activePage">Havic HV G-92 Gamepad</p>
            </div>
            <div className="mainBlock">
              <div className="leftSide">
                <div className="itemImgs">
                  <div
                    onClick={() => {
                      setMainImgOrder(0);
                    }}
                    className="itemImg"
                  >
                    <img
                      src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[0]?.file}`}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => {
                      setMainImgOrder(1);
                    }}
                    className="itemImg"
                  >
                    <img
                      src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[1]?.file}`}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => {
                      setMainImgOrder(2);
                    }}
                    className="itemImg"
                  >
                    <img
                      src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[2]?.file}`}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => {
                      setMainImgOrder(3);
                    }}
                    className="itemImg"
                  >
                    <img
                      src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[3]?.file}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mainImg">
                  <img
                    src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[mainImgOrder]?.file}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="rightSide">
                <h2 className="productTitle">{oneProductData?.title}</h2>
                <div className="rating">
                  <div className="rate">
                    <img src="/stars].svg" alt="" />
                    <p>(150 Reviews)</p>
                  </div>
                  <span></span>
                  <p className="stock">In Stock</p>
                </div>
                <p className="price">{oneProductData?.price} UZS</p>
                <p className="productInfo">
                  {String(oneProductData?.description).length > descrLength
                    ? String(oneProductData?.description).slice(0, descrLength)
                    : oneProductData?.description}{" "}
                  <button
                    onClick={() => {
                      setDescrLength(5000);
                    }}
                    className={
                      String(oneProductData?.description).length > descrLength
                        ? "readMoreBtn"
                        : "noVis"
                    }
                  >
                    ... Read more
                  </button>
                  <button
                    onClick={() => {
                      setDescrLength(150);
                    }}
                    className={descrLength > 150 ? "readMoreBtn" : "noVis"}
                  >
                    Read less
                  </button>
                </p>
                {oneProductData?.properties?.color && (
                  <div className="colours">
                    <p>Colours: </p>
                    <div className="selectColor">
                      {oneProductData?.properties?.color.map((item, index) => {
                        return (
                          <div
                            style={{
                              backgroundColor:
                                oneProductData?.properties?.color[index],
                            }}
                            onClick={() => {
                              setProductColor(
                                oneProductData?.properties?.color[index]
                              );
                            }}
                            className={
                              productColor ==
                              oneProductData.properties.color[index]
                                ? "color active redColor"
                                : "color redColor"
                            }
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {oneProductData?.properties?.size && (
                  <div className="size">
                    <p>Size: </p>
                    <div className="selectSize">
                      {oneProductData.properties.size.map((size, index) => {
                        return (
                          <span
                            onClick={() => {
                              setProductSize(
                                oneProductData.properties.size[index]
                              );
                            }}
                            className={
                              productSize ==
                              oneProductData.properties.size[index]
                                ? "active"
                                : "span"
                            }
                          >
                            <p>{oneProductData?.properties.size[index]}</p>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="mainBtns">
                  <div className="counter">
                    <button
                      onClick={() => {
                        productCount > 1
                          ? setProductCount(productCount - 1)
                          : productCount;
                      }}
                    >
                      -
                    </button>
                    <p className="countValue">{productCount}</p>
                    <button
                      onClick={() => {
                        setProductCount(productCount + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      if (userInfo.id) {
                        // productSize
                        addToCart();
                      } else {
                        navigate("/signup");
                      }
                    }}
                    className="buyNowBtn "
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      if (userInfo.id) {
                        addToLiked();
                        setProductLiked(!productLiked);
                      } else {
                        navigate("/signup");
                      }
                    }}
                    className="likeBtn"
                  >
                    <i
                      className={
                        productLiked
                          ? "fa-solid fa-heart liked"
                          : "fa-regular fa-heart"
                      }
                    ></i>
                  </button>
                </div>
                <div className="deliveryService">
                  <div className="freeDelivery">
                    <div className="serviceBoxImg">
                      <img src="/delivery.svg" alt="" />
                    </div>
                    <div className="serviceBoxText">
                      <h2>Free Delivery</h2>
                      <p>Enter your postal code for Delivery Availability</p>
                    </div>
                  </div>
                  <div className="freeDelivery returnDelivery">
                    <div className="serviceBoxImg">
                      <img src="/reutnr.svg" alt="" />
                    </div>
                    <div className="serviceBoxText">
                      <h2>Return Delivery</h2>
                      <p>Free 30 Days Delivery Returns. Details</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bestSelling">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>Related Item</p>
            </div>
            <div className="productsBlock">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {products?.map((product) => {
                  if (oneProductData?.category.id == product.category.id) {
                    return (
                      <SwiperSlide>
                        <ProductCard key={product.id} product={product} />
                      </SwiperSlide>
                    );
                  } else {
                    return;
                  }
                })}
              </Swiper>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default OneProduct;
