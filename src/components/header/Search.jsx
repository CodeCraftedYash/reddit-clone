import React from 'react'
import styles from './Search.module.css'
import { CiSearch } from "react-icons/ci";
function Search() {
  return (
    <div className={styles.search}>
        <CiSearch className={styles.icon} />
        <input type='text' placeholder='Find community or post'/>
    </div>
  )
}

export default Search