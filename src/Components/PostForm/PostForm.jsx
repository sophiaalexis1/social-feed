import React, { useState } from 'react';
import './PostForm.css';

const PostForm = ({ onPostSubmit }) => {
  const [username, setUsername] = useState('');
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostSubmit({ username, postContent });
    setUsername('');
    setPostContent('');
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
      </div>
      <div>
        <label>Post:</label>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          required
        />
      </div>
      <div>
        <button className="btn btn-primary" type="submit">Submit Post</button>
      </div>
    </form>
  );
};

export default PostForm;
