import React, { Component } from "react";
import "../Styles/Navbar.css"

export default class Navbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="navbar">
        <div className="brand">{this.props.brand}</div>
        <div className="preview">
          <a href="#" className="preview-link"><i class="bi bi-shop-window"></i></a>
          <a href="#" className="preview-link"><i className="bi bi-cart"></i></a>
        </div>
      </div>
    );
  }
}