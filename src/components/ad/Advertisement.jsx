import React from 'react';
import styles from './Advertisement.module.css';
import adPoster from '../../assets/images/Ads/summerSale.jpg'
function Advertisement() {
  return (
    <section className={styles.adContainer}>
        <div className={styles.adPosterContainer}>
          <img src={adPoster} alt="ad poster" width="100%" height="auto" />
        </div>
        
    </section>
  )
}

export default Advertisement