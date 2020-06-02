import React from "react";
import PostSnippet from "../../Components/PostSnippet/PostSnippet";
import "./AllPosts.css";

export default function AllPosts() {
  return (
    <div className="all-posts-container">
      <input
        className="search__bar"
        type="text"
        placeholder="Search for a keyword"
      />
      <PostSnippet title="Job hunting 101" date="6/1/2020" id="1" />
      <PostSnippet
        title="How to respond to racial injustice"
        date="5/30/2020"
        id="2"
      />
      <PostSnippet
        title="Imposter Syndrome? It's me..."
        date="5/25/2020"
        id="3"
      />
      <PostSnippet title="Most Recent Post" date="6/1/2020" id="1" />
      <PostSnippet title="Second Post" date="5/30/2020" id="2" />
      <PostSnippet title="Third Post" date="5/25/2020" id="3" />
      <PostSnippet title="Most Recent Post" date="6/1/2020" id="1" />
      <PostSnippet title="Second Post" date="5/30/2020" id="2" />
      <PostSnippet title="Third Post" date="5/25/2020" id="3" />
    </div>
  );
}
