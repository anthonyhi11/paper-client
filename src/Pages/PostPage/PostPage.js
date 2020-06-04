import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

export default function PostPage(props) {
  //use props.match.param.id to filter out all the posts for the specific post

  return (
    <div className="App">
      <Header />
      <Navbar />
      <h1>Post {props.match.params.id}</h1>
      <h2>date</h2>
    </div>
  );
}
