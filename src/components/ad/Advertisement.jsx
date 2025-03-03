import React from 'react';
import styles from './Advertisement.module.css';
import adPoster from '../../assets/images/Ads/summerSale.jpg'
import Logo from '../header/Logo';
import Button from '../button/Button';
function Advertisement() {
  return (
    <section className={styles.adContainer}>
        <div className={styles.adPosterContainer}>
          <img src={adPoster} alt="ad poster" width="100%" height="auto" className={styles.ad} />
        </div>
        <div className={styles.adPosterContainer}>
            <div className={styles.adOnReddit}>
                <Logo />
                <h2>Advertise on Reddit</h2>
                <Button variant="secondary" size="large" >GET STARTED</Button>
            </div>
        </div>
    </section>
  )
}

export default Advertisement