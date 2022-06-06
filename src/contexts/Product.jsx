import { createContext, useContext, useEffect, useState } from "react";
import query from "../services/api/api.service";

const ProductContext = createContext({
  product: {
    isLoading: false,
    isError: false,
    product: {},
  },
  getProductById: (id) => {},
});
ProductContext.displayName = "ProductContext";

export const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productId, setProductId] = useState(0);
  const [product, setProduct] = useState({
    isLoading: false,
    isError: false,
    product: {},
  });

  useEffect(() => {
    setProduct({ isLoading: true, isError: false, product: [] });
    query
      .getProductById(productId)
      .then((result) => {
        setProduct({
          isLoading: false,
          isError: false,
          product: result.data,
        });
      })
      .catch((err) => {
        setProduct({ isLoading: false, isError: true, product: [] });
      });
  }, [productId]);

  const getProductById = (id) => {
    setProductId(id);
  };

  return (
    <ProductContext.Provider value={{ product, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
