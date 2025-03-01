import React from 'react';
import styles from './Header.module.css';
import {Logo, ThemeSwitcher,Nav, Search, Button, Account} from './index';
function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.left}>
            <ThemeSwitcher />
            <Logo />
        </div>

        <div className={styles.center}>
              <Nav />
              <Search />
              <Button  variant="primary" size="medium"> 
                  Create Post
              </Button> 
        </div>

        <div className={styles.right}>
              <Account />
        </div>
    </header>
  )
}

export default Header