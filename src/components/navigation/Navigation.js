import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.png";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={Logo} alt="" />
      <ul className="lien">
        <NavLink
          to="/home"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/product"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Product</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
      <div className="icon">
        <i class="far fa-heart"></i>
        <i class="far fa-shopping-bag"></i>
      </div>
    </div>
  );
};

export default Navigation;
