import React from "react";

function Card(props) {
  const cards = props.shoeArray.map((element, index) => {
    return (
      <div className="card" key={index} id={index}>
        <img
          src={require(`../Images/${element}.jpg`)}
          className="shoe-img"
          alt={element}
        ></img>
        <p className="shoe-name">{props.shoeNameArray[index]}</p>
        <div className="info-container">
          <div className="btn-container">
            <i className="bi bi-bag-dash less-btn"></i>
            <p className="qty">{props.qty[0].shoe1}</p>
            <i className="bi bi-bag-plus add-btn" onClick={props.addToCart}></i>
          </div>
          <p className="card-price">${props.shoePrice[index]}</p>
        </div>
      </div>
    );
  });

  return <div className="card-container">{cards}</div>;
}

export default Card;
