import './App.css';
import NavigationBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post'

function App() {

  return (
    <div className="App">
      <header>
        <div>
          <NavigationBar />
        </div>
      </header>
      <div>
        <Post username="Harry Potter" body="I solemnly swear I am up to no good." />
        <Post username="Hermione Granger" body="I mean, it's sort of exciting, isn't it, breaking the rules?" />
        <Post username="Severus Snape" body="Always" />
      </div>
    </div>
  );
}

export default App;
