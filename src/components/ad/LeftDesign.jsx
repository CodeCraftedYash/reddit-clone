import React from 'react'
import styles from './Design.module.css'
function LeftDesign() {
  return (
    <div className={styles.squareContainer}>
    {Array(9).fill(0).map((item,index)=>(
        <div key={index} className={styles.individualSquare}></div>
    )  
    )}
  </div>
  )
}

export default LeftDesign