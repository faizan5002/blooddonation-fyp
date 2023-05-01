import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then(response => {
      setPosts(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <h1>Blood Request Posts</h1>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>Blood Group: {post.bloodGroup}</p>
          <p>City {post.city}</p>
          <p>Contact Information:{post.contactInfo}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewPosts;
