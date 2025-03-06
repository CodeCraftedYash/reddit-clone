import React from 'react'
import styles from './Post.module.css'
import { formatedDate } from './formatedTime';
import { FiMessageSquare } from "react-icons/fi";
import { CiShare2 } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function Post({post,loading,error}) {
    const { title, author, created_utc, thumbnail, num_comments, ups, permalink, num_crossposts } = post;
    const truncText = (text,maxLength=25)=>{
        return text.length > maxLength ? text.slice(0,maxLength) + "..." : text;
    }
    const imageUrl =thumbnail?.startsWith("http") ? thumbnail : null;
    if (loading) return <p className={styles.loading}>Loading posts...</p>;
    if (error) return <p className={styles.error}>Error: {error}</p>;
  return (
    <div className={styles.postContainer}>
        <div className={styles.leftComponent}>
        {imageUrl &&<img src={thumbnail} alt="PostPreview" className={styles.Img} loading='lazy'/>}
        <div className={styles.containerMainTitle}>
            <h2 className={styles.text1}>{truncText(title,115)}</h2>
            <div className={styles.containerAuthorDate}>
                <h3 className={styles.text2} >{author}</h3>
                <h3 className={styles.text2}>{formatedDate(created_utc)}</h3>
            </div>
        </div>
        </div>
        <div className={styles.rightComponent}>
          <div className={styles.commentShareContainer}>
            <div className={styles.containerIconText}>
            <FiMessageSquare />
            <h3 className={styles.text2}>{num_comments} Comments</h3>
            </div>
            <div className={styles.containerIconText}>
            <CiShare2 />
            <h3 className={styles.text2}>{num_crossposts} Share</h3>
            </div>
            <div className={styles.containerIconText}>
            <IoIosMore />
            <h3 className={`${styles.text2}`}>More</h3>
            </div>
            </div>
            <div className={styles.containerUpvotes}>
              <FaChevronUp className={styles.arrows}/>
              <h3>{ups}</h3>
              <FaChevronDown className={styles.arrows}/>
            </div>           
        </div>

    </div>
    
  )
}

export default Post