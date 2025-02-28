import React from 'react';
import styles from './Header.module.css';
import {Logo, ThemeSwitcher,Nav} from './index';
function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.left}>
            <ThemeSwitcher />
            <Logo />
        </div>

        <div>
              <Nav />
        </div>

        <div>
                    3
        </div>
    </header>
  )
}

export default Header