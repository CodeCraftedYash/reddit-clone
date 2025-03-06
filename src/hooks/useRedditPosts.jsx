import { useState, useEffect } from "react";

const useRedditPosts = (subreddit, sort) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRedditPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/${sort}.json?limit=10`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data.data.children.map((child) => child.data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRedditPosts();
  }, [subreddit, sort]);

  return { posts, loading, error };
};

export default useRedditPosts;
