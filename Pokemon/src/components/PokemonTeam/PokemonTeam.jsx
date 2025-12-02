import Button from '../Button/Button'
import styles from './PokemonTeam.module.css'
import React from 'react'

const PokemonTeam = ({ pokemonTeam, increasePokemon, reducePokemon, removePokemon }) => {


    return (
      <div className={styles.teamContainer}>
            {pokemonTeam.map(pokemon => (
                <div key={pokemon.id} className={styles.teamItem}>
                    <div className={styles.infoContainer}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
                        <h2 className={styles.title}>{pokemon.name}</h2>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button color='secondary-btn' onClick={()=>{reducePokemon(pokemon)}}>-</Button>
                        <p>{pokemon.count}</p>
                        <Button color='success-btn' onClick={()=>{increasePokemon(pokemon)}}>+</Button>
                        <Button color='danger-btn' onClick={()=>{removePokemon(pokemon)}}>Remove</Button>
                    </div>
                </div>
            ))}
      </div>
    )
}

export default PokemonTeam