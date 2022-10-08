import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity, cream, milk }) => {
  const { creamMinus, creamPlus, milkMinus, milkPlus,  increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => milkMinus(id)}>milk</i>
          <input type="text" placeholder={milk} disabled />
          <i className="fas fa-plus add" onClick={() => milkPlus(id)}>milk</i>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => creamMinus(id)}>cream</i>
          <input type="text" placeholder={cream} disabled />
          <i className="fas fa-plus add" onClick={() => creamPlus(id)}>cream</i>
        </div>

        <div className="price">
          <h3>${price}</h3>
        </div>

      </div>

      <hr />
    </>
  );
};

export default Items;
