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
        <div className="btn-container">
          <i className="bi bi-bag-dash add-btn"></i> 
          <p className="qty">0</p>
           <i className="bi bi-bag-plus less-btn"></i>
        </div>
      </div>
    );
  });

  return <div className="card-container">{cards}</div>;
}

export default Card;
