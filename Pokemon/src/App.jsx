
import './App.css'
import PokemonCardList from './components/PokemonCard/PokemonCardList'
import PokemonTeam from './components/PokemonTeam/PokemonTeam'
import PokemonCount from './components/PokemonCount/PokemonCount' 
import { useState } from 'react'


function App() {

  const [pokemonData, setPokemonData] = useState([]);

  const addPokemonToTeam = (pokemon) => {
    const existingPokemon = pokemonData.find(p => p.id === pokemon.id);
    if (existingPokemon) {
      increasePokemon(pokemon);
    } else {
      setPokemonData(prev => [...prev, { ...pokemon, count: 1 }]);
    }
  };

  const increasePokemon = (pokemon) => {
    setPokemonData(prev =>
      prev.map(p =>
        p.id === pokemon.id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const reducePokemon = (pokemon) => {
    setPokemonData(prev =>
      prev.map(p =>
        p.id === pokemon.id && p.count > 1 ? { ...p, count: p.count - 1 } : p
      )
    );
  };

  const removePokemon = (pokemon) => {
    setPokemonData(prev => prev.filter(p => p.id !== pokemon.id));
  };


  const pokemons = [
    { "id": 4, "name": "Charmander", "type": "fire" },
    { "id": 7, "name": "Squirtle", "type": "water" },
    { "id": 11, "name": "Metapod", "type": "bug" },
    { "id": 12, "name": "Butterfree", "type": "flying" },
    { "id": 25, "name": "Pikachu", "type": "electric" },
    { "id": 39, "name": "Jigglypuff", "type": "normal" },
    { "id": 94, "name": "Gengar", "type": "poison" },
    { "id": 133, "name": "Eevee", "type": "normal" }
  ]

  return (
    <div className="container">
      <h1 className='head-title'>Pokemon Team Manager</h1>
      <PokemonCardList pokemons={pokemons} addPokemonToTeam={addPokemonToTeam} />
      <h2 className='mid-title'>Your Pokemon Team</h2>
       {pokemonData.length === 0 ? (
      <p style={{color:'white', fontSize:'24px' }}>Total Pokemon in Team: 0</p>
    ) : (
      <>
        <PokemonTeam
          pokemonTeam={pokemonData}
          increasePokemon={increasePokemon}
          reducePokemon={reducePokemon}
          removePokemon={removePokemon}
        />
        <h2 className='mid-title'>Pokemon Count</h2>
        <PokemonCount pokemonTeam={pokemonData} />
      </>
    )}

    </div>
  )
}

export default App
