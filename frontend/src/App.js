import React, { useState, Component } from "react";
import "./App.css";

import { BrowserRouter, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./Home";

import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import FriendList from "./components/FriendList/FriendList";
import Descript from "./components/Description/Descript";
import Banner from "./components/Banner/Banner";

function App() {

  const [currLat, setCurrLat] = useState(37.7749)
  const [currLng, setCurrLng] = useState(-122.4194)
  const [destination, setDestination] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [finalLocation, setFinalLocation] = useState('')
  const [locations, setLocations] = useState([
    {lat: 37.75, lng: -122.490001, name: "Dmytro Budym"},
    {lat: 37.73, lng:-122.4194, name: "Danila Fetisov"},
    {lat: 37.77, lng:-122.45, name: "Rafael Cenzaro"},
    {lat: 37.75, lng: -122.4, name: "Siarhei Yakushevich"}
])

  return (
    <BrowserRouter>
      <div className="App">
      <Route path='/' exact render={(props) => (
        <>
          <Navbar />
          <Banner />
          <Descript/>
          <Searchbar 
            currLat = {currLat}
            currLng = {currLng}
            setCurrLat = {setCurrLat}
            setCurrLng = {setCurrLng}
            destination = {destination}
            setDestination = {setDestination}
            finalLocation = {finalLocation}
            setFinalLocation = {setFinalLocation}
            isOpen = {isOpen}
            setIsOpen = {setIsOpen}  
            locations = {locations}
            setLocations = {setLocations}   
          />

          <div className="hero-container">
            <FriendList />
            <Map 
              currLat = {currLat}
              currLng = {currLng}
              setCurrLat = {setCurrLat}
              setCurrLng = {setCurrLng}
              destination = {destination}  
              finalLocation = {finalLocation}  
              isOpen = {isOpen}
              setIsOpen = {setIsOpen}  
              locations = {locations}          
            />
          </div>
        </>
      )} />

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
