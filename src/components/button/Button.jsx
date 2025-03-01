import React from 'react';
import styles from './Button.module.css';
function Button({variant,size,children,...props }) {

  const buttonClass = `${styles.button} ${styles[size]} ${styles[variant]} }`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button