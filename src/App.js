import { useState } from 'react';
import './App.css';
import NavigationBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post';
import PostForm from './Components/PostForm/PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <header>
        <div>
          <NavigationBar />
        </div>
      </header>
      <PostForm onPostSubmit={handlePostSubmit} />
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <Post username={post.username} body={post.postContent} date={post.date}/>
            <p>{post.date}</p>
          </div>
        ))}
        <br></br>
        <Post username="Harry Potter" body="I solemnly swear I am up to no good." date='Sun Aug 06 2023 20:45:15 GMT-0400 (Eastern Daylight Time)'/>
        <Post username="Hermione Granger" body="I mean, it's sort of exciting, isn't it, breaking the rules?" date='Sun Aug 06 2023 20:45:15 GMT-0400 (Eastern Daylight Time)' />
        <Post username="Severus Snape" body="Always" date='Sun Aug 06 2023 20:45:15 GMT-0400 (Eastern Daylight Time)' />
      </div>
    </div>
  );
}

export default App;
