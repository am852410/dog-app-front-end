// import logo from "./logo.svg";
// import "./App.css";
import React, { useState, useEffect } from "react";
import CreateAccount from "./screens/CreateAccount.js";
import CreateDogAccount from "./screens/CreateDogAccount.js";
import MainPage from "./screens/MainPage.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  const [user, setUser] = useState(null);
  const [dog, setDog] = useState(null);
  return (
    <Router>
      <div>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
            <ProfileScreen user={user} dog={dog} />
          </Route>
          <Route path="/create">
            <CreateAccount setUser={setUser} />
          </Route>
          <Route path="/user">
            <CreateDogAccount setDog={setDog} />
          </Route>
          <Route path="/">
            <MainPage />
            <div />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
