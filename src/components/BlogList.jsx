import React from 'react';

import { useState, useEffect } from 'react';
// import api from '../api';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/api/posts');

        console.log('posts', response.data);

        setPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

