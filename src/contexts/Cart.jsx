import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: (product) => {},
  removeFromCart: (id) => {},
});
CartContext.displayName = "CartContext";

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    let oldCart = cart.filter((item) => item.id !== id);
    setCart(oldCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
