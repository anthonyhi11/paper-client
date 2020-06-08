import React from "react";
import "./AddPostModal.css";

export default function AddPostModal(props) {
  function handleSubmit(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let body = e.target.body.value;
    alert(`submitted: ${title} and ${body}`);
    props.handleCancel();
  }

  function handleCancel(e) {
    if (e.target.className === "add-post-modal-container") {
      props.handleCancel();
    }
  }

  return (
    <div className="add-post-modal-container" onClick={(e) => handleCancel(e)}>
      <form className="add-post-modal" onSubmit={handleSubmit}>
        <input type="text" placeholder="title" name="title" id="title" />
        <textarea name="body" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
