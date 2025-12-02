
import React from 'react'
import styles from './PokemonCard.module.css'
import PokemonCard from './PokemonCard'



const PokemonCardList = ({pokemons, addPokemonToTeam}) => {


  return (

   <div className={styles.cardListContainer}>
    {pokemons.map(pokemon =>(
      <PokemonCard key={pokemon.id}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
        title={pokemon.name} 
        handleclick={() => addPokemonToTeam(pokemon)}
      />
    ))}
   </div>
  )
}

export default PokemonCardList