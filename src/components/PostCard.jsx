import React from 'react';

import { Link } from 'react-router-dom'

const PostCard = ({post}) => {
  return (
    <div className="card">
        <div className="card-title">Post Title: {post.title}</div>
        <div className="card-content">Post: {post.content}</div>
        <div className="post-category">Post Category: {post.category}</div>
        <div className="card-options">
          <Link className="editBtn" to={`/posts/${post.id}`}>Edit</Link>
          <Link className="deletBtn" to={`/posts/${post.id}`}>Delete</Link>
        </div>
    </div>
  )
}

export default PostCard