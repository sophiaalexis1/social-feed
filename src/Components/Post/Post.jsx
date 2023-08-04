import React, { useState } from 'react';
import './Post.css'

const Post = ({ username, body }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="post">
      <h3>{username}</h3>
      <p>{body}</p>
      <div>
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleDislike}>Dislike ({dislikes})</button>
      </div>
    </div>
  );
};

export default Post;
