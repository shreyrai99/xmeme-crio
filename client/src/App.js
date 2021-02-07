import './App.css';
import { 
	BrowserRouter as Router,
	Route, Link, Switch 
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Post from './components/Post';
import Feed from './components/Feed';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Post />
      <Feed />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
