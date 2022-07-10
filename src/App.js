import "./App.css";
import { useState } from "react"

function App() {

  const [searchPokemon, setSearchPokemon] = useState()

  const handleSearchPokemon = e => {
    setSearchPokemon(e.target.value)
  }

  return (
    <div className="App">
      <div>
        <h1>Pokémon Stats</h1>
      </div>
      <div>
        <input type="text" placeholder="Search..." onChange={handleSearchPokemon}></input>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default App;
