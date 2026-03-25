import React from 'react';

import { Link } from 'react-router-dom'

const PostCard = ({post}) => {

  const currentUserId = localStorage.getItem('currentUserId');

  return (
    <div className="card">
        <div className="card-username"><span className="postcard-definition">Posted By:</span> {post.postedBy ? post.postedBy : "Unknown Gardener"}</div>
        <div className="card-content">{post.content}</div>
        <div className="post-category"><span className="postcard-definition">Post Category:</span> {post.categories?.map(cat => cat.category_name).join(', ')}</div>
        {String(post.userId) === String(currentUserId) && (
        <div className="card-options">
          <Link className="editBtn" to={`/posts/${post.id}`}>Edit</Link>
          <Link className="deletBtn" to={`/posts/${post.id}`}>Delete</Link>
        </div>
        )}
    </div>
  )
}

export default PostCard