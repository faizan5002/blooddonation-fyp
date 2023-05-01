import React, { useState } from 'react';

function HealthBlog() {
  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState('');
  const [blogs, setBlogs] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleBlogChange = (event) => {
    setBlog(event.target.value);
  }

  const handleAddBlog = () => {
    const newBlog = { title, blog };
    setBlogs([...blogs, newBlog]);
    setTitle('');
    setBlog('');
  }

  return (
    <div>
      <h2>Health Blog</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="blog">Blog:</label>
          <textarea id="blog" value={blog} onChange={handleBlogChange}></textarea>
        </div>
        <button type="button" onClick={handleAddBlog}>Add Blog</button>
      </form>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.blog}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HealthBlog;
