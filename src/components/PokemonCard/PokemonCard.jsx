import styles from './PokemonCard.module.css'
import Button from '../Button/Button'

import React from 'react'

const PokemonCard = ({image, title, handleclick}) => {

  return (
    <div className={styles.cardContainer}>
      <img src={image} />
      <h2 className={styles.title}>{title}</h2>
      <Button color='primary-btn' onClick={handleclick}>Add to Team</Button>
    </div>
  )
}

export default PokemonCard