import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Pages/MainPage/MainPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import AllPosts from "./Pages/AllPosts/AllPosts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/all">
            <AllPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
