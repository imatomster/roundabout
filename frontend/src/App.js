import React, { useState, Component } from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";

import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import FriendList from "./components/FriendList/FriendList";
import Descript from "./components/Description/Descript";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route path='/' exact render={(props) => (
        <>
          <Navbar />
          <Banner />
          <Descript/>
          <Searchbar />

          <div className="hero-container">
            <FriendList />
            <Map />
          </div>
        </>
      )} />

      <Route path="/login" component={Login} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
