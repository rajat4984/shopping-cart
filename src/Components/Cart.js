import React from "react";
import "../Styles/Cart.css";

function Cart(props) {
  //   const cards = props.shoeArray.map((element, index) => {
  //     return (
  //       <div className="cart-card">
  //         <img
  //           src={require(`../Images/${element}.jpg`)}
  //           className="cart-shoe-img"
  //           alt=""
  //         ></img>
  //         <p className="cart-shoe-name">{props.shoeNameArray[index]}</p>
  //         <p>Qty:3</p>
  //         <i className="bi bi-trash3 cart-delete"></i>
  //       </div>
  //     );
  //   });

  //   return <div className="cart-container">{cards}</div>;

  return (
    <div className="cart-container">
      <div className="cart-card">
        <img
          src={require(`../Images/shoe3.jpg`)}
          className="cart-shoe-img"
          alt=""
        ></img>
        <p className="cart-shoe-name">Air Jordan</p>
        <p>Qty:3</p>
        <i className="bi bi-trash3 cart-delete"></i>
      </div>
      <div className="cart-card">
        <img
          src={require(`../Images/shoe4.jpg`)}
          className="cart-shoe-img"
          alt=""
        ></img>
        <p className="cart-shoe-name">Air Jordan</p>
        <p>Qty:3</p>
        <i className="bi bi-trash3 cart-delete"></i>
      </div>
      <div className="cart-card">
        <img
          src={require(`../Images/shoe1.jpg`)}
          className="cart-shoe-img"
          alt=""
        ></img>
        <p className="cart-shoe-name">Air Jordan</p>
        <p>Qty:3</p>
        <i className="bi bi-trash3 cart-delete"></i>
      </div>
      <div className="cart-card">
        <img
          src={require(`../Images/shoe5.jpg`)}
          className="cart-shoe-img"
          alt=""
        ></img>
        <p className="cart-shoe-name">Air Jordan</p>
        <p>Qty:3</p>
        <i className="bi bi-trash3 cart-delete"></i>
      </div>

      <div className="checkout-container">
          <div className="checkout-amount">
              Total: $4500
          </div>
          <button className="checkout-btn">
              Checkout
          </button>
      </div>
    </div>
  );
}

export default Cart;
