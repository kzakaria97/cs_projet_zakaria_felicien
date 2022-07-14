import React from "react";
import "./item.css";

export default function Item(props) {
  return (
    <article className="item">
      <div
        className="imageItem"
        style={{ backgroundImage: `url(${props.url})` }}
      >
        <span className="pastille">{props.pastille}</span>
        <i class="fa-solid fa-heart"></i>
        <button>ADD TO CART</button>
      </div>
      <p>{props.nom}</p>
      ok
      <p>{props.prix}</p>
      <span>{props.nouveauPrix}</span>
    </article>
  );
}
