import Map from "./components/Map/Map"
import Navbar from "./components/Navbar/Navbar"
import "./components/Searchbar/Searchbar.css"
import Searchbar from "./components/Searchbar/Searchbar"

function App() {
  return (
    <div className="App">      
      <Navbar/>      
      <Searchbar/>
      <Map/>
    </div>
  );
}

export default App;
