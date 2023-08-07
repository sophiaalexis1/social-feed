import React, { useState } from 'react';
import './PostForm.css';

const PostForm = ({ onPostSubmit }) => {
  const [username, setUsername] = useState('');
  const [postContent, setPostContent] = useState('');
  const [date, setDate] = useState(Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostSubmit({ username, postContent, date: new Date()});
    setUsername('');
    setPostContent('');
    setDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className='container'>
        <h3><label>Name:</label></h3>
        <input
            placeholder='Name'
            type="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        </div>
      </div>
      <div>
        <h3><label>Post:</label></h3>
        <textarea
            className='form-control form-control-lg'
            placeholder='Post'
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            required
        />
      </div>
      <div>
        <button className="btn btn-primary" type="submit">Create</button>
      </div>
    </form>
  );
};

export default PostForm;
