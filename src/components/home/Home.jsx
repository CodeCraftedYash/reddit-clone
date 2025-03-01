import React from 'react' ;
import Community from '../community/Community' ;
import styles from './Home.module.css' ;
function Home() {
  return (
    <div className={styles.homeContainer}>
        <Community />
    </div>
  )
}

export default Home