import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <a
          href="https://anthonyhi11.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Portfolio</p>
        </a>
        <Link to="/all">
          <p>All Posts</p>
        </Link>
      </nav>
    </div>
  );
}
