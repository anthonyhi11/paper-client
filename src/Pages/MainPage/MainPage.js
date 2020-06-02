import React from "react";
import PostSnippet from "../../Components/PostSnippet/PostSnippet";

export default function MainPage() {
  return (
    <div>
      <h1>Welcome to the blog...</h1>
      <p>this is my journey as a new developer</p>
      <h2>Recent Posts</h2>
      <PostSnippet title="Job Hunting 101" date="6/1/2020" id="1" />
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
    </div>
  );
}
