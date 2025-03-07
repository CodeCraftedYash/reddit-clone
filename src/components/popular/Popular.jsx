import React, { useState, useEffect, useRef } from 'react';
import styles from './Popular.module.css';
import Header from './Header.jsx';
import useRedditPosts from '../../hooks/useRedditPosts.jsx';
import Post from './Post.jsx';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
function Popular() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagePosts, setPagePosts] = useState([]);
  const perPagePostsNo = 12;
  const [sort, setSort] = useState("hot");
  const subreddit ="indiasocial";
  const { posts, loading, error } = useRedditPosts(subreddit,sort);
  const totalPage = Math.ceil(posts.length/perPagePostsNo)
  const containerRef = useRef();
  //for dividing posts into fragments
  useEffect(() => {
    if (posts.length < 20) {
      setPagePosts(posts);
    } else {
      const start = (currentPage - 1) * perPagePostsNo;
      setPagePosts(posts.slice(start, start + perPagePostsNo));
    }
  }, [posts, currentPage]);
  //for scrolling up _____
  const handlePageChange = ()=>{
      setCurrentPage(prev => prev + 1);
      if (containerRef.current) {
        containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  //reset page no. to 1 when changing sort
  useEffect (()=>{
    setCurrentPage(1);
  },[sort])
  return (
    <section className={styles.container}>
        <Header sort={sort} setSort={setSort} />
        <div className={styles.postContainer} ref={containerRef}>
          {pagePosts.map((item)=>(
            <Post post={item} loading={loading} error={error} key={item.id}/>
          ))} 
          <div className={styles.paginationContainer}>
          <FaChevronLeft className={`${currentPage<2 ? styles.paginationIconsNotActive : styles.paginationIcons}`} onClick={currentPage < 2 ? null : () => setCurrentPage(prev => prev - 1)}/>
          <h1>{currentPage}</h1>
          <FaChevronRight className={`${currentPage>totalPage-1 ? styles.paginationIconsNotActive : styles.paginationIcons}`} onClick={handlePageChange}/>
        </div> 
        </div>
    </section>
  ) 
}

export default Popular