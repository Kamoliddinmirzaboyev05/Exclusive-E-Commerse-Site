import React from "react";
import "./Search.css";
import ProductCard from "../../components/productCard/ProductCard";
import { Card, CardContent, Skeleton } from "@mui/material";
function Search({ products, searchVal }) {
  const filteredProducts = products?.filter((product) => {
    if (searchVal) {
      return product.title?.toLowerCase().includes(searchVal?.toLowerCase());
    } else {
      return product;
    }
  });

  return (
    <div className="searchPage">
      <div className="container">
        <div className="sectionHeadLeft">
          <h2 className="sectionTitle">Search</h2>
        </div>
        <div className="productsBlock">
          {filteredProducts?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
          {!products &&
            [1, 2, 3, 4].map((item) => {
              return (
                <Card sx={{ maxWidth: 300, p: 3 }}>
                  {/* Mahsulot rasmi uchun Skeleton */}
                  <Skeleton variant="rectangular" width={220} height={180} />
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
  );
}

export default Search;
