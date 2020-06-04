import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Pages/MainPage/MainPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import AllPosts from "./Pages/AllPosts/AllPosts";
import PostPage from "./Pages/PostPage/PostPage";
import AdminMain from "./Pages/Admin/AdminMain/AdminMain";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Navbar />
            <MainPage />
          </Route>
          <Route path="/about">
            <Header />
            <Navbar />
            <AboutPage />
          </Route>
          <Route path="/all">
            <Header />
            <Navbar />
            <AllPosts />
          </Route>
          <Route path="/posts/:id" component={PostPage} />
          <Route path="/admin" component={AdminMain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
