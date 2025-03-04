import React from 'react'
import styles from './Footer.module.css';
function Footer() {
  return (
    <footer className={styles.footerContainer}>
        <div>
            <ul className={styles.linksContainer}>
              <li className={styles.link}>About<a href="/"></a></li>
              <li className={styles.link}>Advertise<a href="/"></a></li>
              <li className={styles.link}>Reddit App<a href="/"></a></li>
              <li className={styles.link}>Careers<a href="/"></a></li>
              <li className={styles.link}>Help<a href="/"></a></li>
              <li className={styles.link}>Reddit Gold<a href="/"></a></li>
              <li className={styles.link}>Press<a href="/"></a></li>
              <li className={styles.link}>Blog<a href="/"></a></li>
              <li className={styles.link}>Reddit Hits<a href="/"></a></li>
            </ul>
        </div>
        <div className={styles.lastRow}>
            <h2 className={styles.textElement}>&copy;  2020</h2>
            <div className={styles.privacyTerms}>
              <h2><a href="/" className={styles.textElement}>Privacy</a></h2>
              <h2><a href="/" className={styles.textElement}>Terms</a></h2>
            </div>
        </div>
    </footer>
  )
}

export default Footer