import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [searchPokemon, setSearchPokemon] = useState();
  const [pokemonData, setPokemonData] = useState({});
  const [chosenPokemon, setChosenPokemon] = useState(false);

  const handleSearchPokemon = (e) => {
    setSearchPokemon(e.target.value.toLowerCase());
  };

  const handleEnterKey = e => {
    if(e.key === 'Enter'){
      callPokemon()
    }
  }

  const callPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`).then(
      (res) =>
        setPokemonData({
          name: res.data.species.name,
          species: res.data.species.name,
          pokeSpriteFront: res.data.sprites.front_default,
          pokeSpriteBack: res.data.sprites.back_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          type: res.data.types[0].type.name,
        })
    );
    setChosenPokemon(true);
  };

  return (
    <div className="App">
      <div>
        <h1>Pokémon Stats</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchPokemon}
          onKeyPress={handleEnterKey}
        ></input>
      </div>
      <button onClick={callPokemon}>Submit</button>
      <div>
        {!chosenPokemon ? (
          ""
        ) : (
          <div className="pokecard">
            <div>
              <h1 style={{ textTransform: "capitalize" }}>
                {pokemonData.name}
              </h1>
              <h2 style={{ textTransform: "capitalize" }}>
                {pokemonData.type} Type
              </h2>
              <div className="sprite-container">
                <div>
                  <img
                    className="sprite-img"
                    src={pokemonData.pokeSpriteFront}
                  />
                </div>
                <div>
                  <img
                    className="sprite-img"
                    src={pokemonData.pokeSpriteBack}
                  />
                </div>
              </div>
              <div className="poke-stats">
                <h2 className="poke-stat-list">HP: {pokemonData.hp}</h2>
                <h2 className="poke-stat-list">ATK: {pokemonData.attack}</h2>
                <h2 className="poke-stat-list">DEF: {pokemonData.defense}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
