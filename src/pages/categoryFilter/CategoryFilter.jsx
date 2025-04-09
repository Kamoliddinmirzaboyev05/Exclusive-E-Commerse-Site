import React, { useEffect, useState } from "react";
import "./CategoryFilter.css";
import { useNavigate, useParams } from "react-router-dom";
import { link } from "../../config";
import ProductCard from "../../components/productCard/ProductCard";
import { Card, CardContent, Skeleton } from "@mui/material";
function CategoryFilter() {
  const id = useParams();

  const [categoryProducts, setCategoryProducts] = useState(null);
  //   GetCategoryProducts
  const getCategoryProducts = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${link}/product/list/?category_id=${id.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCategoryProducts(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCategoryProducts();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: "0",
    });
  }, []);

  return (
    <div className="categoryFilterPage">
      <div className="container">
        <h2 className="pageTitle">{categoryProducts && categoryProducts[0].category?.title }</h2>
        <div className="productsBlock">
          {categoryProducts?.map((product) => {
            return <ProductCard product={product} />;
          })}
          {!categoryProducts &&
            [1, 2, 3, 4].map((item) => {
              return (
                <Card sx={{ maxWidth: 300, p: 3 }}>
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

export default CategoryFilter;
