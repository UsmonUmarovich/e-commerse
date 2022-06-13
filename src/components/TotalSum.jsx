import React from "react";
import { useCart } from "../contexts/Cart";

export const TotalSum = () => {
  const { cart } = useCart();
  const summ = cart.reduce((p, v) => {
    let sum = v.price * v.total;
    return p + sum;
  }, 0);
  return <div>{summ.toFixed(2)}</div>;
};
