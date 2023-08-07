import { useState } from 'react';
import './App.css';
import NavigationBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post';
import PostForm from './Components/PostForm/PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts((prevPosts) => [...posts, newPost]);
  };

  return (
    <div className="App">
      <header>
        <div>
          <NavigationBar />
        </div>
      </header>
      <PostForm onPostSubmit={handlePostSubmit} />
      <div className="border">
        {posts.map((post, index) => (
          <div key={index}>
            <Post username={post.username} body={post.postContent} date={post.date}/>
          </div>
        ))}
        <Post username="Harry Potter" body="I solemnly swear I am up to no good." date='12/06/1993 10:45:15 PM'/>
        <Post username="Hermione Granger" body="I mean, it's sort of exciting, isn't it, breaking the rules?" date='11/06/1996 10:45:15 AM' />
        <Post username="Severus Snape" body="Always" date='5/06/1998 8:45:15 PM' />
      </div>
    </div>
  );
}

export default App;
