import React from 'react';
import styles from './Header.module.css';
function Header() {
  return (
    <div className={styles.header}>
            <h1>Popular</h1>
            <nav>
                <ul className={styles.list}>
                    <li><a className={styles.popularLink} href=''>Hot</a></li>
                    <li><a className={styles.popularLink} href=''>New</a></li>
                    <li><a className={styles.popularLink} href=''>Controversial</a></li>
                    <li><a className={styles.popularLink} href=''>Rising</a></li>
                    <li><a className={styles.popularLink} href=''>Top</a></li>
                </ul>
            </nav>
        </div>
  )
}

export default Header