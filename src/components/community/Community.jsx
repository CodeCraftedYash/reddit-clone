import React from 'react'
import { favorites,redditFeeds,community } from './data/subreddits'
import { FaChevronDown } from "react-icons/fa";
import styles from './Community.module.css'
import SubReddit from './SubReddit';
function Community() {
  return (
    <div className={styles.communityContainer}>
        <div className={styles.filterBox}>
            <h3>Filter by</h3>
            <FaChevronDown />
        </div>
        <SubReddit heading="FAVORITE" data={favorites}/>
        <SubReddit heading="REDDIT FEEDS" data={redditFeeds}/>
        <SubReddit heading="COMMUNITY" data={community}/>
    </div>
  )
}

export default Community