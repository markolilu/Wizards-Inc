import React, { useState, useEffect } from 'react';
import api from '../api';

import Blogpost from './Blogpost';

const Blogpost = () => {
  const [courses, setPosts] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
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


// return (
//     <div>
//       <h2>All Posts</h2>
//       <div className="post-list">
//         {posts.map((post) => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </div>
//   );