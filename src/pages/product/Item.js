import React from "react";
import "./item.css";

export default function Item(props) {
  console.log(props.url);
  return (
    <article className="item">
      <div
        className="imageItem"
        style={{ backgroundImage: `url(${props.url})` }}
      >
        <span>{props.pastille}</span>
        <i className="fa-solid fa-heart"></i>
        <button>ADD TO CART</button>
      </div>
      <p>{props.nom}</p>
      <p>{props.prix}</p>
      <span>{props.nouveauPrix}</span>
    </article>
  );
}
