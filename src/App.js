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
        <Post username="Harry Potter" body="This is my first post! What do you think?" />
        <Post username="Hermione Granger" body="Had a great day at the park today!" />
      </div>
    </div>
  );
}

export default App;
