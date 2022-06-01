import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../../contexts/ProductsByCategory";

export const Products = () => {
  const { products, getProductsCategory } = useProductsByCategory();

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getProductsCategory(params.id);
    }
  }, [params.id]);

  return <div>Products</div>;
};