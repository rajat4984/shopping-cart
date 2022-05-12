import React from "react";
import "../../Styles/MainPage/Mj.css" 
import MJ from "../../Images/jordan.png"

function MjSection() {
  return (
    <div className="mj-container">
      <h1 className="slogan">
        Limits like fear ,<br /> are often just an ilusion
        <sub className="slogan-sub">
          <i> -Micheal jordan</i>
        </sub>
      </h1>
      <img src={MJ} className="mj-image"></img>
    </div>
  );
}

export default MjSection;
