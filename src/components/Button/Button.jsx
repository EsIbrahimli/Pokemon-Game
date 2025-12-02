
import React from 'react'
import styles from './Button.module.css'


const Button = ({ color, children, onClick }) => {
  return (
    <button
      className={`${styles[color]} ${styles.btn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button