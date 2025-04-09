import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import ProductCard from "../../components/productCard/ProductCard";
import { Card, CardContent, Skeleton } from "@mui/material";
import { link } from "../../config";

function Wishlist({ likedProducts, getWishlist }) {
  useEffect(() => {
    getWishlist();
    window.scrollTo({
      top: "0",
    });
  }, []);

  return (
    <>
      <div className="WishlistOne">
        <div className="container">
          <div className="Wishlist">
            <div className="WishlistTitle">
              <h3>
                Wishlist <span>({likedProducts?.length})</span>
              </h3>
              <div>
                <button>Delete all from wishlist</button>
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
        </div>
      </div>
    </>
  );
}

export default Wishlist;
