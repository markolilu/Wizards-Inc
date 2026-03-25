import React, { useEffect, useState } from 'react';

import api from '../api';

import categoriesData from '../../seeds/categories.json';

import BlogList from '../components/BlogList';
import { useNavigate } from 'react-router-dom';
import usersData from '../../seeds/users.json';


const Home = ({ isAuthenticated }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setselectedCategories] = useState([]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title: "",
        content: postContent,
        categoryId: selectedCategories.map(id => Number(id))
      };

      const response = await api.post('/api/posts', payload)
      const data = response.data;
      console.log(data);

      // navigate('/');
    } catch (error) {
      console.error('Create Post Failed', error.response)
      const backEndError = error.response?.data?.message
      if (backEndError !== null) {
        setErrorMsg(backEndError)
      }
    }
  };

  const navigate = useNavigate();

  const Divider = () => {
    return (
      <hr></hr>
    );
  };
 
 
  return (
    <div className="home-container">

      <h1 className="home-title">Share your garden's journey.</h1>

      <p>A post a day keeps the aphids... well, it won't keep the aphids away, but at least you'll have someone to complain to about them.</p>

      <Divider />

      { /*i need to log-in to style section below*/}
      <section>
        {/* {isAuthenticated ? ( */}
        <form onSubmit={handleSubmit}>
          <textarea className="post-input"
            placeholder="Add your post here..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          {categories.map(category => (
            <div key={category.id}>
              <input type="checkbox" id={`category${category.id}`} value={category.id} onChange={(e) => {
                const isChecked = e.target.checked;
                const categoryId = e.target.value;

                if (isChecked) {
                  setselectedCategories(prev => [...prev, categoryId]);
                } else {
                  setselectedCategories(prev => prev.filter(id => id !== categoryId));
                }
              }} />
              <label htmlFor={`category${category.id}`}>{category.category_name}</label><br />
            </div>
          ))}

          <button className="home-btn" type='submit'>Plant Your Post</button>
        </form>
        {/* ) : ( */}
        <div className="home">
          <p>Log-in or sign-up if you would like to post.</p>
          <button className="home-btn" onClick={() => navigate('/login')}>Go to Login</button>
        </div>
        {/* )} */}
      </section>

      <Divider />
      <main>

        <BlogList posts={posts} />

      </main>
    </div>
  );
};

export default Home;