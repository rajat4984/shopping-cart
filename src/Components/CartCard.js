import React from "react";

function CartCard(props) {
  return (
    <div className="cart-card" id={props.key}>
      <img
        src={require(`../Images/${props.image}.jpg`)}
        className="cart-shoe-img"
        alt=""
      ></img>
      <p className="cart-shoe-name">{props.name}</p>
      <p>{props.cartQty}</p>
      <p>{props.price}</p>
      <i className="bi bi-trash3 cart-delete"></i>
    </div>
  );
}

export default CartCard;
