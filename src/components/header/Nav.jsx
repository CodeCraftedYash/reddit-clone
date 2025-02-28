import React from 'react'
import styles from './Nav.module.css';
import { CgHome } from "react-icons/cg";
import { IoIosArrowRoundUp } from "react-icons/io";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { CgMoveUp } from "react-icons/cg";
function Nav() {
  return (
    <nav>
        <ul className={styles.navbar}>
            <li className={styles.navList}>
               <CgHome />
               <a href="/" > Home</a>
            </li>

            <li className={styles.navList}>
                <div className={styles.popularLogo}>
                    <LuChartNoAxesColumnIncreasing /><IoIosArrowRoundUp className={styles.arrow}/>
                </div>
               <a href="/" className={styles.navPopular}>Popular</a>
            </li>

            <li className={styles.navList}>
                <CgMoveUp  className={styles.allLogo}/>
               <a href="/">All</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav