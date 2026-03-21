import React from 'react';
import postsData from '../../seed/posts.json';
import categoriesData from '../../seeds/categories.json';

const UserPost = ({ post }) => {
  return (
    <div>
      <div>
        <strong>{post.title}</strong>
        <span>
          {new Date(post.created_on).toLocaleDateString()}
        </span>
      </div>
      <p>{post.content.substring(0, 100)}...</p>
       <div>
        {category ? category.categoryName.replace("_", " ") : "General"}
      </div>
    </div>
  );
};


export default UserPost;