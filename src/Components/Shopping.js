import React from "react";
import Card from "./Card";
import "../Styles/Shopping.css";

function Shopping(props) {
  return (
    <div>
      <Card shoeArray = {props.shoeArray} shoeNameArray = {props.shoeNameArray} />
    </div>
  );
}

export default Shopping;
