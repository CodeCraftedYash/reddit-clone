import React from 'react';
import styles from './Header.module.css';
import {Logo, ThemeSwitcher,Nav, Search, Button} from './index';
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

        <div>
                    3
        </div>
    </header>
  )
}

export default Header