import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import ProductCard from "../../components/productCard/ProductCard";
import { Card, CardContent, Skeleton } from "@mui/material";
import { link } from "../../config";

function Wishlist({ likedProducts, getWishlist }) {
  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <>
      <div className="WishlistOne">
        <div className="container">
          <div className="Wishlist">
            <div className="WishlistTitle">
              <h3>
                Wishlist <span>(4)</span>
              </h3>
              <div>
                <button>Move All To Bag</button>
              </div>
            </div>
            <div className="productsBlock">
              {likedProducts && (
                <div
                  className={
                    !likedProducts?.length > 0 ? "emptyText" : "hidden"
                  }
                >
                  <h1>Istaklar ro'yhatida hali mahsulot mavjud emas!</h1>
                </div>
              )}
              {likedProducts?.map((product) => {
                return (
                  <ProductCard
                    getWishlist={getWishlist}
                    product={product}
                    liked={"true"}
                  />
                );
              })}
              {!likedProducts &&
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
          <div className="Just">
            <div className="justTitle">
              <div className="sectionType">
                <span className="rec"></span>
                <p>Just For You</p>
              </div>
              <div>
                <button>See All</button>
              </div>
            </div>
            <div className="productsBlock">
              <div className="productCard">
                <div className="productImgBox">
                  <span className="disc">
                    <p>-40%</p>
                  </span>
                  <div className="hoverBtn heartBtn">
                    <i className="fa-regular fa-eye"></i>
                  </div>

                  <div className="productImg">
                    <img src="/card1.1.png" alt="" />
                  </div>
                  <button className="addCartBtn">
                    <div>
                      <img src="/public/Cart1.svg" alt="" />
                    </div>
                    <div>Add To Cart</div>
                  </button>
                </div>
                <div className="productData">
                  <h2>HAVIT HV-G92 Gamepad</h2>
                  <div className="price">
                    <p className="newPrice">$120</p>
                    <p className="lastPrice">$160</p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImgBox">
                  <span className="disc">
                    <p>-40%</p>
                  </span>
                  <div className="hoverBtn heartBtn">
                    <i className="fa-regular fa-eye"></i>
                  </div>

                  <div className="productImg">
                    <img src="/card1.1.png" alt="" />
                  </div>
                  <button className="addCartBtn">
                    <div>
                      <img src="/public/Cart1.svg" alt="" />
                    </div>
                    <div>Add To Cart</div>
                  </button>
                </div>
                <div className="productData">
                  <h2>HAVIT HV-G92 Gamepad</h2>
                  <div className="price">
                    <p className="newPrice">$120</p>
                    <p className="lastPrice">$160</p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImgBox">
                  <span className="disc">
                    <p>-40%</p>
                  </span>
                  <div className="hoverBtn heartBtn">
                    <i className="fa-regular fa-eye"></i>
                  </div>

                  <div className="productImg">
                    <img src="/card1.1.png" alt="" />
                  </div>
                  <button className="addCartBtn">
                    <div>
                      <img src="/public/Cart1.svg" alt="" />
                    </div>
                    <div>Add To Cart</div>
                  </button>
                </div>
                <div className="productData">
                  <h2>HAVIT HV-G92 Gamepad</h2>
                  <div className="price">
                    <p className="newPrice">$120</p>
                    <p className="lastPrice">$160</p>
                  </div>
                </div>
              </div>
              <div className="productCard">
                <div className="productImgBox">
                  <span className="disc">
                    <p>-40%</p>
                  </span>
                  <div className="hoverBtn heartBtn">
                    <i className="fa-regular fa-eye"></i>
                  </div>

                  <div className="productImg">
                    <img src="/card1.1.png" alt="" />
                  </div>
                  <button className="addCartBtn">
                    <div>
                      <img src="/public/Cart1.svg" alt="" />
                    </div>
                    <div>Add To Cart</div>
                  </button>
                </div>
                <div className="productData">
                  <h2>HAVIT HV-G92 Gamepad</h2>
                  <div className="price">
                    <p className="newPrice">$120</p>
                    <p className="lastPrice">$160</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
