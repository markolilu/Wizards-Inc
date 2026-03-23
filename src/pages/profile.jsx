import React from 'react';
import UserInfo from '../components/profile/UserInfo';
import UserPost from '../components/profile/UserPosts';
import postsData from '../../seeds/posts.json';

const Profile = ({ currentUser }) => {
 
  const myPosts = postsData.filter(post => post.user_id === currentUser.id);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      
      
      <UserInfo currentUser={currentUser} />

     
      <section>
        <h2 >My Past Shoots ({myPosts.length})</h2>
        {myPosts.length > 0 ? (
          myPosts.map(post => (
            <UserPost key={post.id} post={post} />
          ))
        ) : (
          <p>You haven't planted any posts yet! 🌱</p>
        )}
      </section>

    </div>
  );
};



export default Profile;