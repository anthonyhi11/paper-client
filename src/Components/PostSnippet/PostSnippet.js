import React from "react";
import "./PostSnippet.css";
import { Link } from "react-router-dom";

export default function PostSnippet(props) {
  return (
    <>
      <div
        className={
          !props.admin ? "post-snippet-container" : "admin-post-snippet"
        }
      >
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        {!props.admin && (
          <>
            <p>
              Minim ea ex dolor labore est ut non nulla proident dolor. Fugiat
              Lorem ea laboris cillum amet. Ullamco anim duis nulla fugiat.
              Laboris quis adipisicing ipsum adipisicing sunt esse qui. Minim
              officia laboris ipsum excepteur reprehenderit exercitation in non
              commodo exercitation.
            </p>
            <Link to={`posts/${props.id}`}>See More</Link>
          </>
        )}
        {props.admin && (
          <div>
            <p>View</p>
            <p>Edit</p>
          </div>
        )}
      </div>
    </>
  );
}
