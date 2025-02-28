import React from 'react'
import styles from './Logo.module.css'
import redditLogo from '../../assets/images/redditLogo.svg'
function Logo() {
  return (
    <img src={redditLogo} alt='reddit logo' width={100} height="fit" className={styles.logo}/>
  )
}

export default Logo