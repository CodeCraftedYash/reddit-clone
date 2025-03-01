import React from 'react'
import styles from './Account.module.css';
import { FiMessageSquare } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import userLogo from '../../assets/images/userProfileImage.png'
function Account() {
  return (
    <div className={styles.container}>
        <div className={styles.notification}>
            <FiMessageSquare />
            <div className={styles.unseen}></div>
        </div>
        <CiMail className={styles.message} />
        <div className={styles.account}>
            <img src={userLogo} alt="user" width={100} height={100} className={styles.userPic}/>
            <FaChevronDown />
        </div>
    </div>
  )
}

export default Account