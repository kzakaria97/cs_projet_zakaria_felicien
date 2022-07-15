import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        to="/home"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <img src="/img/logo.png" alt="" />
      </NavLink>
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
          <i class="pt-2 far fa-heart text-black"></i>
        </NavLink>
        <div class="dropdown">
          <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
          >
            <i class="far fa-shopping-bag"></i>
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink"></ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
