import React, { useEffect, useState } from 'react';

import api from '../api';

import categoriesData from '../../seeds/categories.json';

import BlogList from '../components/BlogList';

const Home = ({ isAuthenticated }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await api.get('/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchPosts();
  fetchCategories();
}, []);

  const Divider = () => {
    return (
      <hr
        style={{ borderTop: "2px solid #96b747", width: "50%" }}
      ></hr>
    );
  };

  return (
    <div className="home-container">

      <h1 className="home-title">Share your garden's journey.</h1>

      <p>A post a day keeps the aphids... well, it won't keep the aphids away, but at least you'll have someone to complain to about them.</p>

<Divider />

      { /*i need to log-in to style section below*/}
      <section>
        {isAuthenticated ? (
          <div>
            <textarea className="post-input"
              placeholder="Add your post here..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <div className="category-row">
              <select className="select-category">
                <option>Choose Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                ))}
              </select>
            </div>
            <button className="home-btn">Plant Your Post</button>
          </div>
        ) : (
          <div className="home">
            <p>Log-in or sign-up if you would like to post.</p>
            <button className="home-btn">Go to Login</button>
          </div>
        )}
      </section>


      <main>
    
        <BlogList posts={posts} />

      </main>
    </div>
  );
};

export default Home;