import { createContext, useContext, useState, useEffect } from "react";
import query from "../services/api/api.service";

const ProductsByCategoryContext = createContext({
  products: {
    isLoading: false,
    isError: false,
    products: [],
  },
  getProductsCategory: (category) => {},
});
ProductsByCategoryContext.displayName = "ProductsByCategoryContext";

export const useProductsByCategory = () =>
  useContext(ProductsByCategoryContext);

const ProductsByCategoryProvider = ({ children }) => {
  const [products, setProducts] = useState({
    isLoading: false,
    isError: false,
    products: [],
  });
  const [category, setCategory] = useState();

  const getProductsCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    setProducts({ isLoading: true, isError: false, products: [] })
    query
      .getProductsByCategory(category)
      .then((result) =>
        setProducts({ isLoading: false, isError: false, products: result.data })
      )
      .catch((err) =>
        setProducts({ isLoading: false, isError: true, products: [] })
      );
  }, [category]);

  return (
    <ProductsByCategoryContext.Provider
      value={{ products, getProductsCategory }}
    >
      {children}
    </ProductsByCategoryContext.Provider>
  );
};

export default ProductsByCategoryProvider;
