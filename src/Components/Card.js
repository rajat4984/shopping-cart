import React from "react";

function Card(props) {
  const cards = props.shoeArray.map((element, index) => {
    return (
      <div className="card">
        <img
          src={require(`../Images/${element}.jpg`)}
          className="shoe-img"
          alt=""
        ></img>
        <p className="shoe-name">{props.shoeNameArray[index]}</p>
        <button className="btn">Add to cart</button>
      </div>
    );
  });

  return <div className="card-container">{cards}</div>;
}

export default Card;
