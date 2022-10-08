import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  // increment the item
  const creamPlus = (id) => {
    return dispatch({
      type: "CREAMPLUS",
      payload: id,
    });
  };
  // increment the item
  const milkPlus = (id) => {
    return dispatch({
      type: "MILKPLUS",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  // decrement the item
  const creamMinus = (id) => {
    return dispatch({
      type: "CREAMMINUS",
      payload: id,
    });
  };
  // decrement the item
  const milkMinus = (id) => {
    return dispatch({
      type: "MILKMINUS",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, creamMinus, creamPlus, increment,decrement, milkMinus, milkPlus,}}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
