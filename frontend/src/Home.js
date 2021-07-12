import React, { useState, Component } from "react";
import "./Home.css";

import { BrowserRouter, Route} from "react-router-dom";

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
  const [locIndex, setLocIndex] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
      <Route path='/home' exact render={(props) => (
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
          />

          <div className="hero-container">
            <FriendList/>
            <Map 
              currLat = {currLat}
              currLng = {currLng}
              setCurrLat = {setCurrLat}
              setCurrLng = {setCurrLng}
              destination = {destination}  
              finalLocation = {finalLocation}  
              isOpen = {isOpen}
              setIsOpen = {setIsOpen}    
              locIndex = {locIndex}
              setLocIndex={setLocIndex}      
            />
          </div>
        </>
      )} />

      {/* <Route path="/login" component={Login} /> */}
        
      </div>
    </BrowserRouter>
  );
}

export default App;
