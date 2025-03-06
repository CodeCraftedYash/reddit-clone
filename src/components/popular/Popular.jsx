import React, { useState } from 'react';
import styles from './Popular.module.css';
import Header from './Header.jsx';
import useRedditPosts from '../../hooks/useRedditPosts.jsx';
import Post from './Post.jsx';
function Popular() {
  const [sort, setSort] = useState("hot");
  const subreddit ="indiasocial";
  const { posts, loading, error } = useRedditPosts(subreddit,sort);
  console.clear();
  console.log(posts);
  return (
    <section className={styles.container}>
        <Header sort={sort} setSort={setSort} />
        <div className={styles.postContainer}>
          {posts.map((item)=>(
            <Post post={item}/>
          ))}  
        </div>
    </section>
  ) 
}

export default Popular