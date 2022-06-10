import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: (product) => {},
  removeFromCart: (id) => {},
  clearCart: () => {},
});
CartContext.displayName = "CartContext";

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const prod = {
      
    }

    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    let oldCart = cart.filter((item) => item.id !== id);
    setCart(oldCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
