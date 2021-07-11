import Map from "./components/Map/Map"
import Navbar from "./components/Navbar/Navbar"
import Searchbar from "./components/Searchbar/Searchbar"
import "./App.css"
import FriendList from "./components/FriendList/FriendList"

function App() {
  return (
    <div className="App">      
      <Navbar/>      
      <Searchbar/>
      <div className="hero-container">
        <FriendList/>
        <Map/>
      </div>
    </div>
  );
}

export default App;
