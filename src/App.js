import "./App.css";
import { useState } from "react"
import Axios from "axios"

function App() {

  const [searchPokemon, setSearchPokemon] = useState()

  const handleSearchPokemon = e => {
    setSearchPokemon(e.target.value)
  }

  const callPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
    .then((res) => console.log(res.data))
  }

  return (
    <div className="App">
      <div>
        <h1>Pokémon Stats</h1>
      </div>
      <div>
        <input type="text" placeholder="Search..." onChange={handleSearchPokemon}></input>
      </div>
      <button onClick={callPokemon}>Submit</button>
    </div>
  );
}

export default App;
