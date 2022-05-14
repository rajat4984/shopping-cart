import React from "react";
import "../Styles/Cart.css";

function Cart(props) {
  return (
    <div className="cart-container">
      {props.components.map((element) => {
        console.log(element)
        return (
          element
        );
      })}

      {props.components.length !== 0 && <div className="checkout-container">
        <div className="checkout-amount">Total: $100</div>
        <button className="checkout-btn">Checkout</button>
      </div>}
    </div>
  );
}

export default Cart;
