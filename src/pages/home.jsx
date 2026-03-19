import React, { useState } from 'react';
// Assuming these are imported from your data files
import postsData from '../data/posts.json'; 
import categoriesData from '../data/categories.json';

const Home = ({ isAuthenticated }) => {
  const [posts] = useState(postsData);
  const [postContent, setPostContent] = useState('');

  return (
    <div style={styles.container}>
      <header className="home-header">
        <h1 className="home-title">Share your garden's journey.</h1>
        <div className="home-text">
          <p>A post a day keeps the aphids... well, it won't keep the aphids away, but at least you'll have someone to complain to about them.</p>
        </div>
      </header>

      <section>
        {isAuthenticated ? (
          <div style={styles.inputWrapper}>
            <textarea className="post-input"
              placeholder="Add your post here..."               
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            <div style={styles.categoryRow}>
               <select style={styles.select}>
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
            <p>Log-in if you would like to post.</p>
            <button className="home-btn">Go to Login</button>
          </div>
        )}
      </section>

      
      <main>
    
        {posts.map((post) => (
          <div key={post.id} style={styles.postEntry}>
            {/* Post Title/Content Area */}
            <div style={styles.titleBox}>
              <h3 style={styles.postTitleText}>{post.title}</h3>
            </div>

            {/* Metadata Grid (Matches your wireframe split) */}
            <div style={styles.metaContainer}>
              <div style={styles.userColumn}>
                {post.postedBy}
              </div>
              <div style={styles.infoColumn}>
                <div style={styles.categoryRowItem}>
                  {categoriesData.find(c => c.id === post.category_id)?.categoryName || "Uncategorized"}
                </div>
                <div className="home-date">
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