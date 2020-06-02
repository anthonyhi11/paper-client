import React from "react";
import "./PostSnippet.css";
import { Link } from "react-router-dom";

export default function PostSnippet(props) {
  return (
    <div className="post-snippet-container">
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>
        Minim ea ex dolor labore est ut non nulla proident dolor. Fugiat Lorem
        ea laboris cillum amet. Ullamco anim duis nulla fugiat. Laboris quis
        adipisicing ipsum adipisicing sunt esse qui. Minim officia laboris ipsum
        excepteur reprehenderit exercitation in non commodo exercitation.
      </p>
      <Link to={props.id}>See More</Link>
    </div>
  );
}
