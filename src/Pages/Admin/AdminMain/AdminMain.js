import React from "react";
import PostSnippet from "../../../Components/PostSnippet/PostSnippet";

export default function AdminMain() {
  return (
    <div className="App">
      <h1>THIS IS ADMIN PAGE</h1>
      <PostSnippet title="Job Hunting" date="6/2/2020" admin="true" />
    </div>
  );
}
