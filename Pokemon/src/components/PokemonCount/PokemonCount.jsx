import Table from 'react-bootstrap/Table';
import React from 'react'
import styles from './PokemonCount.module.css'

const PokemonCount = ({ pokemonTeam }) => {
  return (
    <Table className={styles.table}  bordered hover>
        <thead>
        <tr>
          <th>NickName</th>
          <th>Count</th>
          <th>Label</th>
        </tr>
      </thead>
      <tbody>
        {pokemonTeam.map(pokemon => (
          <tr key={pokemon.id}>
            <td>{pokemon.name}</td>
            <td>{pokemon.count}</td>
            <td>Pokemon</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PokemonCount