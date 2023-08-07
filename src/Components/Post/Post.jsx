import React, { useState } from 'react';
import './Post.css'

const Post = ({ username, body, date }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [likeactive, setLikeActive] = useState(false);
  const [dislikeactive, setDislikeActive] = useState(false);
//   const [buttonClass, setButtonClass ] = useState("inactive");

//   const handleLike = () => {
//     setLikes(likes + 1);
//     handleClick();
//   };

//   const handleDislike = () => {
//     setDislikes(dislikes + 1);
//     handleClick();
//   };

  function likef(){
    if(likeactive) {
        setLikeActive(false);
        setLikes(likes - 1);
    }
    else {
        setLikeActive(true);
        setLikes(likes + 1);
        if(dislikeactive) {
            setDislikeActive(false);
            // setlike(like + 1);
            setDislikes(dislikes -1)
        }
    }
  }
  function dislikef(){
    if(dislikeactive) {
        setDislikeActive(false);
        setDislikes(dislikes - 1);
    }
    else {
        setDislikeActive(true);
        setDislikes(dislikes + 1);
        if(likeactive) {
            setLikeActive(false);
            // setdislike(dislike + 1);
            setLikes(likes -1)
        }
    }
  }

  return (
    <div className="post">
      <h3>{username}</h3>
      <p>{body}</p>
      <p>{date}</p>
      <div>
        <button
          className={[likeactive ? 'active-like' : null, 'button'].join(' ')}
          onClick={likef}
        >
          Like ({likes})
        </button>
        <button
          className={[dislikeactive ? 'active-dislike' : null, 'button'].join(
            ' '
          )}
          onClick={dislikef}
        >
          Dislike ({dislikes})
        </button>
      </div>
    </div>
  );
};

export default Post;
