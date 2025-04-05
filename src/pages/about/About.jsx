import React from "react";
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { CiShop } from "react-icons/ci";
import { AiOutlineDollar, AiOutlineShopping } from "react-icons/ai";
function About() {
  return (
    <div className="aboutPage">
      <div className="container">
        <div className="pageWay">
          <p>Home</p>
          <p>/</p>
          <p className="activePage">About</p>
        </div>
        <div className="outStory">
          <div className="storyText">
            <h2>Our Story</h2>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="storyImg">
            <img src="/aboutimg.png" alt="" />
          </div>
        </div>
        <div className="aboutUsBlock">
          <div className="aboutUsBox">
            <div className="aboutUsBoxIcon">
              <CiShop />
            </div>
            <h2>10.5k </h2>
            <p>Sallers active our site</p>
          </div>
          <div className="aboutUsBox">
            <div className="aboutUsBoxIcon">
              <AiOutlineDollar />
            </div>
            <h2>33k </h2>
            <p>Mopnthly Produduct Sale</p>
          </div>
          <div className="aboutUsBox">
            <div className="aboutUsBoxIcon">
              <AiOutlineShopping />
            </div>
            <h2>45.5k</h2>
            <p>Customer active in our site</p>
          </div>
          <div className="aboutUsBox">
            <div className="aboutUsBoxIcon">
              <i class="fa-solid fa-sack-dollar"></i>
            </div>
            <h2>25k</h2>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
        <div className="ourWorkersBlock">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="outWorkerBox">
                <div className="workerImg">
                  <img src="/worker1.png" alt="" />
                </div>
                <div className="workerData">
                  <h2>Tom Cruise</h2>
                  <p>Founder & Chairman</p>
                  <div className="workerSocials">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="outWorkerBox">
                <div className="workerImg">
                  <img src="/worker2.png" alt="" />
                </div>
                <div className="workerData">
                  <h2>Emma Watson</h2>
                  <p>Managing Director</p>
                  <div className="workerSocials">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="outWorkerBox">
                <div className="workerImg">
                  <img src="/worker3.png" alt="" />
                </div>
                <div className="workerData">
                  <h2>Will Smith</h2>
                  <p>Product Designer</p>
                  <div className="workerSocials">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="outWorkerBox">
                <div className="workerImg">
                  <img src="/worker1.png" alt="" />
                </div>
                <div className="workerData">
                  <h2>Tom Cruise</h2>
                  <p>Founder & Chairman</p>
                  <div className="workerSocials">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="outWorkerBox">
                <div className="workerImg">
                  <img src="/worker2.png" alt="" />
                </div>
                <div className="workerData">
                  <h2>Emma Watson</h2>
                  <p>Managing Director</p>
                  <div className="workerSocials">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="outWorkerBox">
                <div className="workerImg">
                  <img src="/worker3.png" alt="" />
                </div>
                <div className="workerData">
                  <h2>Will Smith</h2>
                  <p>Product Designer</p>
                  <div className="workerSocials">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="outWorkerBox">
                <div className="workerImg">
                  <img src="/worker1.png" alt="" />
                </div>
                <div className="workerData">
                  <h2>Tom Cruise</h2>
                  <p>Founder & Chairman</p>
                  <div className="workerSocials">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="outWorkerBox">
                <div className="workerImg">
                  <img src="/worker2.png" alt="" />
                </div>
                <div className="workerData">
                  <h2>Emma Watson</h2>
                  <p>Managing Director</p>
                  <div className="workerSocials">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="outWorkerBox">
                <div className="workerImg">
                  <img src="/worker3.png" alt="" />
                </div>
                <div className="workerData">
                  <h2>Will Smith</h2>
                  <p>Product Designer</p>
                  <div className="workerSocials">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
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
        
        </div>
      </section>
    </div>
  );
}

export default About;
