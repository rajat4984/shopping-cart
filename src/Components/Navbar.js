import React, { Component } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/" className="brand">
          {this.props.brand}
        </Link>
        <div className="preview">
          <Link to="shopping" className="preview-link">
            <i className="bi bi-shop-window"></i>
          </Link>
          <Link to="cart" className="preview-link">
            <i className="bi bi-cart"></i>
          </Link>
        </div>
      </div>
    );
  }
}
