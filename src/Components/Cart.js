import React from "react";

function Cart(props) {
  const cards = props.shoeArray.map((element, index) => {
    return (
      <div className="cart-card">
        <img
          src={require(`../Images/${element}.jpg`)}
          className="cart-shoe-img"
          alt=""
        ></img>
        <p className="cart-shoe-name">{props.shoeNameArray[index]}</p>
      </div>
    );
  });

  return <div className="cart-container">{cards}</div>;
}

export default Cart;
