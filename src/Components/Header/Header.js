import React, { useState } from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [adminLogin, showAdminLogin] = useState(false);
  const history = useHistory();

  function handleAdmin(event) {
    event.stopPropagation();
    let current = event.target;
    console.log(current.className);
    if (
      current.className === "background-modal" ||
      current.className === "adminbutton"
    ) {
      if (!adminLogin) {
        showAdminLogin(true);
      } else {
        showAdminLogin(false);
      }
    }
  }

  function handleLogIn() {
    history.push("/admin");
    showAdminLogin(false);
  }

  return (
    <div className="header-container">
      <h1>paper</h1>
      <p onClick={handleAdmin} className="adminbutton">
        *
      </p>
      {adminLogin && (
        <div className="background-modal" onClick={handleAdmin}>
          <div className="login-modal">
            <form onSubmit={handleLogIn}>
              <input type="text" required placeholder="Username" />
              <input type="password" required placeholder="Password" />
              <button>Log In</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
