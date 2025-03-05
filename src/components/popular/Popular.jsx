import React, { useState } from 'react';
import styles from './Popular.module.css';
import Header from './Header.jsx';
function Popular() {
  const [sort, setSort] = useState("hot");
  return (
    <section className={styles.container}>
        <Header sort={sort} setSort={setSort} />
        <div className={styles.postContainer}>
            
        </div>
    </section>
  ) 
}

export default Popular