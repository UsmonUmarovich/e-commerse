import { createContext, useContext, useEffect, useState } from "react";
import query from "../services/api/api.service";
import shuffle from "../utilities/shuffle";

const AllProductsContext = createContext({
  isLoading: false,
  isError: false,
  products: [],
});
AllProductsContext.displayName = "AllProductsContext";

export const useAllProduct = () => useContext(AllProductsContext);

const AllProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState({
    isLoading: false,
    isError: false,
    products: [],
  });

  useEffect(() => {
    query
      .getAllProducts()
      .then((result) =>
        setAllProducts({ isLoading: false, isError: false, products: shuffle(result.data) })
      )
      .catch((err) =>
        setAllProducts({ isLoading: false, products: [], isError: true })
      );
  }, []);

  return (
    <AllProductsContext.Provider value={allProducts}>
      {children}
    </AllProductsContext.Provider>
  );
};

export default AllProductProvider;
