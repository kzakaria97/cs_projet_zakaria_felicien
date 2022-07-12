import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="/img/logo.png" alt="" />
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
        <NavLink
          to="/like"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <i class="far fa-heart"></i>
        </NavLink>
        <NavLink
          to="/panier"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          |<i class="far fa-shopping-bag"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
