import React, { useState } from 'react';

import postsData from '../../seeds/posts.json'; 
import categoriesData from '../../seeds/categories.json';

const Home = ({ isAuthenticated }) => {
  const [posts] = useState(postsData);
  const [postContent, setPostContent] = useState('');

  return (
    <div className="container">
      <header className="home-header">
        <h1 className="home-title">Share your garden's journey.</h1>
        <div className="home-text">
          <p>A post a day keeps the aphids... well, it won't keep the aphids away, but at least you'll have someone to complain to about them.</p>
        </div>
      </header>

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
                  {categoriesData.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                  ))}
               </select>
            </div>
            <button className="home-btn">Plant Your Post</button>
          </div>
        ) : (
          <div>
            <p>Log-in or sign-up if you would like to post.</p>
            <button className="home-btn">Go to Login</button>
          </div>
        )}
      </section>

      
      <main>
    
        {posts.map((post) => (
          <div key={post.id} style={styles.postEntry}>
            
            <div>
              <h3 className="post-title">{post.title}</h3>
            </div>
            <div>
              <div className="post-user">
                {post.user}
              </div>
              <div style={styles.infoColumn}>
                <div className="post-category">
                  {categoriesData.find(c => c.id === post.category_id)?.categoryName || "Uncategorized"}
                </div>
                <div className="date">
                  {new Date(post.created_on).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

 export default Home;