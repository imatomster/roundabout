import Map from "./components/Map/Map"
import Navbar from "./components/Navbar/Navbar"
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
