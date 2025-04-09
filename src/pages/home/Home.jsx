import React, { useEffect, useState } from "react";
import "./Home.css";
import { CiMobile1 } from "react-icons/ci";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { link } from "../../config";
import { Card, CardContent, Typography } from "@mui/material";
import { toast } from "react-toastify";

function Home({ products, getCartProducts, userInfo, getData, getWishlist }) {
  const [categories, setCategories] = useState(null);
  const [productCount, setProductCount] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [oneProductData, setOneProductData] = useState(null);
  const [productId, setProductId] = useState(null);
  const [colorName, setColorName] = useState(null);
  const [sizeVal, setSizeVal] = useState(null);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    getData();
    getCategories();
  }, []);

  // getCategories function
  const getCategories = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://ecommercev01.pythonanywhere.com/product/categories/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      })
      .catch((error) => console.error(error));
  };

  // getOneProductFunction
  const getOneProduct = () => {
    if (!productId) {
      console.error("Error: productId is missing!");
      return;
    }
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${link}/product/detail/?product_id=${productId}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((result) => {
        setOneProductData(result);
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  useEffect(() => {
    getOneProduct();
  }, [productId]);

  // closemodal function
  const closeModal = (e) => {
    if (e.target.classList.contains("cartModalBack")) {
      setShowModal(false);
      setQuantity(1);
      setColorName(null);
      setSizeVal(null);
    } else {
      setShowModal(true);
    }
  };

  // Add to cart function
  const addToCart = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const raw = JSON.stringify({
      product_id: productId,
      quantity: quantity,
      properties: {
        color: colorName,
        ...(sizeVal !== null && { size: sizeVal }),
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
        setShowModal(false);
        getCartProducts();
        setQuantity(1);
        setColorName(null);
        setSizeVal(null);
      })
      .catch((error) => console.error(error));
  };

  // Discount timer function
  const targetDate = new Date("2025-04-10T23:59:59");
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
    }, [1000]);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div className="home">
      <header>
        <div className="hero">
          <div className="container">
            <div className="heroFilter">
              {categories?.map((category) => {
                return (
                  <Link
                    to={`/categoryfilter/category/${category.id}`}
                    key={category.id}
                    className="row"
                  >
                    <div className="categoryData">
                      <img src={category.image} alt={category.title} />
                      <p>{category.title}</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                  </Link>
                );
              })}
              {!categories &&
                [1, 2, 3, 4, 5].map((item) => {
                  return (
                    <Box sx={{ width: 150 }}>
                      <Skeleton
                        style={{ marginBottom: "28px" }}
                        variant="h1"
                        width={170}
                        height={20}
                      />
                    </Box>
                  );
                })}
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <div className="heroSlider">
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </header>

      <main>
        <section className="flashSales">
          <div
            onClick={(e) => {
              closeModal(e);
            }}
            className={showModal ? "cartModalBack" : "hidden"}
          >
            <div className="cartModal">
              <div className="leftSide">
                <div className="modalImgBox">
                  <img
                    src={`${link}/${oneProductData?.pictures[0].file}`}
                    alt={oneProductData?.pictures[0].file}
                  />
                </div>
                <button className="seeMoreBtn">Read more</button>
              </div>
              <div className="rightSide">
                <h2>Product nomi</h2>
                <div className="selectColor">
                  <div className="partTitle">
                    <h3>Color: </h3>
                    <p>{colorName ? colorName : null}</p>
                  </div>
                  <div className="selectColors">
                    {oneProductData?.properties.color.map((color, index) => {
                      return (
                        <div
                          className={
                            colorName == oneProductData.properties.color[index]
                              ? "color active"
                              : "color"
                          }
                          onClick={() => {
                            setColorName(
                              oneProductData?.properties.color[index]
                            );
                          }}
                          style={{
                            backgroundColor:
                              oneProductData?.properties.color[index],
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                {oneProductData?.properties.size && (
                  <div className="selectSize">
                    <div className="partTitle">
                      <h3>Size: </h3>
                      <p>{sizeVal ? sizeVal : null}</p>
                    </div>
                    <div className="selectSizes">
                      {oneProductData.properties.size.map((size, index) => {
                        return (
                          <div
                            onClick={() => {
                              setSizeVal(size);
                            }}
                            className={
                              sizeVal == oneProductData.properties.size[index]
                                ? "sizeItem active"
                                : "sizeItem"
                            }
                          >
                            <p>{size}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="selectQuantity">
                  <div className="partTitle">
                    <h3>Quantity:</h3>
                    <p className="productQuantity">{quantity}</p>
                  </div>
                  <div className="counter">
                    <button
                      onClick={() => {
                        setQuantity(quantity > 1 ? quantity - 1 : quantity);
                      }}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="partTitle">
                  <h3>Price: </h3>
                  <p>200000</p>
                  <p className="nonActivePrice">240000</p>
                </div>
                <button
                  onClick={() => {
                    addToCart();
                    setShowModal(false);
                    if (quantity > 0 && colorName) {
                      toast.success(
                        "Mahsulot karzinkaga muvaffaqiyatli qo'shildi!"
                      );
                    } else {
                      toast.error("Tanlanmagan xususiyat bor!");
                    }
                  }}
                  className="viewBtn"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>Today’s</p>
            </div>
            <div className="sectionHead">
              <div className="sectionHeadLeft">
                <h2 className="sectionTitle">Flash Sales</h2>
                <div className="timer">
                  <div className="value">
                    <p>Days</p>
                    <h2>
                      0{timeLeft.days < 9 ? timeLeft.days : "0" + timeLeft.days}
                    </h2>
                  </div>
                  <p className="doubleDot">:</p>
                  <div className="value">
                    <p>Hours</p>
                    <h2>
                      {timeLeft.hours > 9
                        ? timeLeft.hours
                        : "0" + timeLeft.hours}
                    </h2>
                  </div>
                  <p className="doubleDot">:</p>
                  <div className="value">
                    <p>Minutes</p>
                    <h2>
                      {timeLeft.minutes > 9
                        ? timeLeft.minutes
                        : "0" + timeLeft.minutes}
                    </h2>
                  </div>
                  <p className="doubleDot">:</p>
                  <div className="value">
                    <p>Seconds</p>
                    <h2>
                      {timeLeft.seconds > 9
                        ? timeLeft.seconds
                        : "0" + timeLeft.seconds}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="sectionHeadRight">
                <div className="slideBtns">
                  <button className="slideBtn">
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <button className="slideBtn">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="productsBlock">
              {products?.map((product, index) => {
                if (index < productCount) {
                  return (
                    <ProductCard
                      userInfo={userInfo}
                      setProductId={setProductId}
                      setShowModal={setShowModal}
                      key={product.id}
                      getData={getData}
                      getWishlist={getWishlist}
                      product={product}
                    />
                  );
                } else {
                  return;
                }
              })}
              {!categories &&
                [1, 2, 3, 4].map((item) => {
                  return (
                    <Card sx={{ maxWidth: 300, p: 3 }}>
                      {/* Mahsulot rasmi uchun Skeleton */}
                      <Skeleton
                        variant="rectangular"
                        width={220}
                        height={180}
                      />
                      <CardContent>
                        <Skeleton variant="text" width="80%" height={30} />
                        <Skeleton variant="text" width="40%" height={20} />
                        <Skeleton
                          style={{ marginBottom: "20px" }}
                          variant="rectangular"
                          width="100%"
                          height={40}
                          sx={{ mt: 2 }}
                        />
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
            <div className="view">
              <button
                onClick={() => {
                  productCount == 4
                    ? setProductCount(10000)
                    : setProductCount(4);
                }}
                className="viewBtn"
              >
                {productCount == 4 ? "View All Products" : "View less"}
              </button>
            </div>
          </div>
        </section>

        <section className="byCategory">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>Categories</p>
            </div>
            <h2 className="sectionTitle">Browse By Category</h2>
            <div className="categoryBlock">
              {categories?.map((category) => {
                return (
                  <Link
                    to={`categoryfilter/category/${category.id}`}
                    key={category.id}
                    className="categoryBox"
                  >
                    <img src={category.image} alt="" />
                    <p>{category.title}</p>
                  </Link>
                );
              })}
              {!categories &&
                [1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <Card sx={{ maxWidth: 300, p: 3 }}>
                      <Skeleton
                        variant="rectangular"
                        width={120}
                        height={120}
                      />
                    </Card>
                  );
                })}
            </div>
          </div>
        </section>

        <section className="bestSelling">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>This month</p>
            </div>
            <div className="sectionHead">
              <h2 className="sectionTitle">Best Selling Products</h2>
              <button className="viewBtn">View All</button>
            </div>
            <div className="productsBlock">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {products?.map((product) => {
                  if (product.price > product.discount_price) {
                    return (
                      <SwiperSlide>
                        <ProductCard
                          userInfo={userInfo}
                          setProductId={setProductId}
                          setShowModal={setShowModal}
                          key={product.id}
                          getData={getData}
                          getWishlist={getWishlist}
                          product={product}
                        />
                      </SwiperSlide>
                    );
                  } else {
                    return;
                  }
                })}
              </Swiper>
              {!categories &&
                [1, 2, 3, 4].map((item) => {
                  return (
                    <Card sx={{ maxWidth: 300, p: 3 }}>
                      <Skeleton
                        variant="rectangular"
                        width={220}
                        height={180}
                      />
                      <CardContent>
                        <Skeleton variant="text" width="80%" height={30} />
                        <Skeleton variant="text" width="40%" height={20} />
                        <Skeleton
                          style={{ marginBottom: "20px" }}
                          variant="rectangular"
                          width="100%"
                          height={40}
                          sx={{ mt: 2 }}
                        />
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>
        </section>

        <section className="discAdd">
          <div className="container">
            <div className="leftData">
              <p className="sectionTitle">Categories</p>
              <h2>Enhance Your Music Experience</h2>
              <div className="discTimer">
                <div className="discTimerItem">
                  <h2>
                    {" "}
                    0{timeLeft.days < 9 ? timeLeft.days : "0" + timeLeft.days}
                  </h2>
                  <p>Days</p>
                </div>
                <div className="discTimerItem">
                  <h2>
                    {" "}
                    {timeLeft.hours > 9 ? timeLeft.hours : "0" + timeLeft.hours}
                  </h2>
                  <p>Hours</p>
                </div>
                <div className="discTimerItem">
                  <h2>  {timeLeft.minutes > 9
                        ? timeLeft.minutes
                        : "0" + timeLeft.minutes}</h2>
                  <p>Minutes</p>
                </div>
                <div className="discTimerItem">
                  <h2> {timeLeft.seconds > 9
                        ? timeLeft.seconds
                        : "0" + timeLeft.seconds}</h2>
                  <p>Seconds</p>
                </div>
              </div>
              <button className="viewBtn buyNowBtn">Buy Now</button>
            </div>
            <div className="rightImg">
              <img src="/musicex.png" alt="" />
            </div>
          </div>
        </section>

        <section className="featuredProducts">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>Featured</p>
            </div>
            <h2 className="sectionTitle">New Arrival</h2>
            <div className="featuredBlock">
              <div className="leftProduct">
                <img src="/playstation.png" alt="" />
                <div className="featuredProductData">
                  <h2>PlayStation 5</h2>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <Link>Shop Now</Link>
                </div>
              </div>
              <div className="rightProducts">
                <div className="topProduct">
                  <img src="/women.png" alt="" />
                  <div className="featuredProductData">
                    <h2>Women’s Collections</h2>
                    <p>
                      Featured woman collections that give you another vibe.
                    </p>
                    <Link>Shop Now</Link>
                  </div>
                </div>
                <div className="bottomProducts">
                  <div className="bottomProduct">
                    <img src="/speakers.png" alt="" />
                    <div className="featuredProductData">
                      <h2>Speakers</h2>
                      <p>Amazon wireless speakers</p>
                      <Link>Shop Now</Link>
                    </div>
                  </div>
                  <div className="bottomProduct">
                    <img src="/gucci.png" alt="" />
                    <div className="featuredProductData">
                      <h2>Perfume</h2>
                      <p>GUCCI INTENSE OUD EDP</p>
                      <Link>Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <div className="serviceBlock">
              <div className="serviceItem">
                <div className="serviceImg">
                  <img src="/delivery.png" alt="" />
                </div>
                <div className="serviceData">
                  <h2>FREE AND FAST DELIVERY</h2>
                  <p>Free delivery for all orders over $140</p>
                </div>
              </div>
              <div className="serviceItem">
                <div className="serviceImg">
                  <img src="/call.png" alt="" />
                </div>
                <div className="serviceData">
                  <h2>24/7 CUSTOMER SERVICE</h2>
                  <p>Friendly 24/7 customer support</p>
                </div>
              </div>
              <div className="serviceItem">
                <div className="serviceImg">
                  <img src="/garantee.png" alt="" />
                </div>
                <div className="serviceData">
                  <h2>MONEY BACK GUARANTEE</h2>
                  <p>We reurn money within 30 days</p>
                </div>
              </div>
            </div>
            <div className="toTop">
              <button>
                <i className="fas fa-arrow-up"></i>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
