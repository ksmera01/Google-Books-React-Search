import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export function Card2(props) {
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

export function SaveBookBtn2(props) {
  return (
    <button className="btn btn-success save-btn" {...props} role="button" tabIndex="0">
      Save
    </button>
  );
}