import Map from "./components/Map/Map"
import Navbar from "./components/Navbar/Navbar"
import Searchbar from "./components/Searchbar/Searchbar"
import "./App.css"
import FriendList from "./components/FriendList/FriendList"
import React, {useState} from 'react'

function App() {

  const [destination, setDestination] = useState('')

  return (
    <div className="App">      
      <Navbar/>      
      <Searchbar
        destiantion={destination}
        setDestination={setDestination}
      />                
      <div className="hero-container">
        <FriendList/>
        <Map />
      </div>
    </div>
  );
}

export default App;
