import React, { useState, Component } from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/Register/Register";

import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import FriendList from "./components/FriendList/FriendList";
import Descript from "./components/Description/Descript";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Descript/>
        <Searchbar />

        <div className="hero-container">
          <FriendList />
          <Map />
        </div>

        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
