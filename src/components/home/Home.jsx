import React from 'react' ;
import Community from '../community/Community' ;
import styles from './Home.module.css' ;
import Popular from '../popular/Popular';
import Advertisement from '../ad/Advertisement';
import Footer from '../footer/Footer';
function Home() {
  return (
    <div className={styles.homeContainer}>
        <Community />
        <Popular />
        <div className={styles.rightSection}>
          <Advertisement />
          <Footer />
        </div>
    </div>
  )
}

export default Home