import React from 'react';
import styles from './Header.module.css';
function Header({ sort , setSort}) {
  return (
    <div className={styles.header}>
            <h1>Popular</h1>
            <nav>
                <ul className={styles.list}>
                    <li className={`${sort=="hot"?styles.activeLink:styles.popularLink}`} onClick={()=>setSort("hot")}>Hot</li>
                    <li className={`${sort=="new"?styles.activeLink:styles.popularLink}`} onClick={()=>setSort("new")}>New</li>
                    <li className={`${sort=="controversial"?styles.activeLink:styles.popularLink}`} onClick={()=>setSort("controversial")}>Controversial</li>
                    <li className={`${sort=="rising"?styles.activeLink:styles.popularLink}`} onClick={()=>setSort("rising")}>Rising</li>
                    <li className={`${sort=="top"?styles.activeLink:styles.popularLink}`} onClick={()=>setSort("top")}>Top</li>
                </ul>
            </nav>
        </div>
  )
} 

export default Header