import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Main from "../page/Main";
import moon from "../assets/moon-regular.svg";
import cart from "../assets/bag-shopping-solid.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/" className="header-item">
          React Shop
        </Link>
        <Link to="/fashion" className="header-item">
          패션
        </Link>
        <Link to="/accessory" className="header-item">
          액세서리
        </Link>
        <Link to="/digital" className="header-item">
          디지털
        </Link>
      </div>
      <div className="header-right">
        <a>
          <img src={moon} className="header_icon theme_dark_mode " />
        </a>
        <input className="header_input theme_dark_input " placeholder="검색" />
        <a>
          <img src={cart} className="header_icon theme_dark_cart " />
        </a>
      </div>
    </div>
  );
}
