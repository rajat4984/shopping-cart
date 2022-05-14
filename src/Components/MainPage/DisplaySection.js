import React from "react";
import "../../Styles/MainPage/DisplaySection.css";
import shoeImage from "../../Images/background-image.png";
import MjSection from "./MjSection";

function DisplaySection() {
  return (
    <div>
      <div className="display-container">
        <img src={shoeImage} className="shoe-image"></img>
        <h1 className="slogan">
          If you quit once it becomes a <br /> habit,Navbar quit!{" "}
          <sub className="slogan-sub">
            {" "}
            <i>-Micheal jordan</i>
          </sub>
        </h1>
      </div>
      <MjSection />
    </div>
  );
}

export default DisplaySection;
