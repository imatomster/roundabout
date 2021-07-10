import Map from "./Map"
import Navbar from "./Navbar"
import "./App.css"
import Searchbar from "./Searchbar"

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
