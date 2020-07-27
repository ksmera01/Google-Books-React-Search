import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Card(props) {
    return (
        <div className="card mb-3 cardBorder">
            <img src={props.image} class="card-img-left" alt={props.title}>
            </img>
            <div className="card-body col-md-8">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Author(s): {props.authors}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Description: {props.description}</li>
            </ul>
            <div className="card-body">
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-link">Book Link</a>
            </div>
        </div>
    );
}

export default Card;