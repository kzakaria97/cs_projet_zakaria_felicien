import React from 'react'
import './Item.css'

export default function Item(props) {
    return (
        <article className="item">
            <div className="imageItem"
            style = {{ backgroundImage: `url(${props.url})`}}
            >
                <span>{props.pastille}</span>
            </div>
            <p>{props.nom}</p>
            <p>{props.prix}</p>
            <span>{props.nouveauPrix}</span>
        </article>
    )
}
