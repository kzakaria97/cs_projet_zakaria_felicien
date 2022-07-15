import React, { useState } from "react";
import "./item.css";
import Product from "./Product"


export default function Item(props) {
  return (
    <article
      className="item">
      <div
        className="imageItem"
        style={{ backgroundImage: `url(${props.url})` }}
      >
        <span
          className="pastille">{props.pastille}</span>
        <i
          onClick={props.handleFavoriClick}
          class="fa-solid fa-heart"></i>
        <button
          onClick={props.handlePanierClick}
        >ADD TO CART</button>
      </div>
      <p>{props.nom}</p>
      
      <p>{props.prix}</p>
      <span>{props.nouveauPrix}</span>
    </article>
  );
}
