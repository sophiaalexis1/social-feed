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
            <Post username={post.username} body={post.postContent}/>
          </div>
        ))}
        <Post username="Harry Potter" body="I solemnly swear I am up to no good." />
        <Post username="Hermione Granger" body="I mean, it's sort of exciting, isn't it, breaking the rules?" />
        <Post username="Severus Snape" body="Always" />
      </div>
    </div>
  );
}

export default App;
