import React from 'react'
import styles from './Footer.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.linksContainer}>
            <ul>
              <li className={styles.link}><a href="/"></a></li>
            </ul>
        </div>
        <div className={styles.lastRow}>
            <h2>&copy;  2020</h2>
            <div>
              <h2><a href="">Privacy</a></h2>
              <h2><a href="">Terms</a></h2>
            </div>
        </div>
    </footer>
  )
}

export default Footer