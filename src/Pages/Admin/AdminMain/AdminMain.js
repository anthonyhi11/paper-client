import React, { useState } from "react";
import "./AdminMain.css";
import PostSnippet from "../../../Components/PostSnippet/PostSnippet";
import CalendarSideBar from "../../../Components/CalendarSideBar/CalendarSideBar";
import AddPostModal from "../../../Components/AddPostModal/AddPostModal";

export default function AdminMain() {
  const [addShown, setAddShown] = useState(false);

  function handleAddButton() {
    setAddShown(true);
  }

  function handleCancel(e) {
    setAddShown(false);
  }

  return (
    <div className="admin__page__container">
      <h1>THIS IS ADMIN PAGE</h1>
      {addShown && <AddPostModal handleCancel={handleCancel} />}
      <button className="add-new" onClick={handleAddButton}>
        Add new post
      </button>
      <div className="admin__inner__container">
        <PostSnippet title="Job Hunting" date="6/2/2020" admin="true" />
        <CalendarSideBar />
      </div>
    </div>
  );
}
