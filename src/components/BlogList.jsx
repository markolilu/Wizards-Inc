import React from 'react';

import { useState, useEffect } from 'react';

import PostCard from './PostCard';

const BlogList = ({posts}) => {

  

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

