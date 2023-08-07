import React, { useState } from 'react';
import './PostForm.css';

const PostForm = ({ onPostSubmit }) => {
  const [username, setUsername] = useState('');
  const [postContent, setPostContent] = useState('');
  const [date, setDate] = useState(Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostSubmit({ username, postContent, date});
    setUsername('');
    setPostContent('');
    setDate({Date});
  };

  return (
    <form className='form-group' onSubmit={handleSubmit}>
      <div className='form-group'>
        <div className='container'>
        <h3><label>Name:</label></h3>
        <input
            className='form-control'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        </div>
      </div>
      <div className='form-group'>
        <h3><label>Post:</label></h3>
        <textarea
            className='form-control'
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
