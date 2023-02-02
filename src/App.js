import LatestNews from './components/Latest News';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './views/Home';
import NewsDetails from './components/NewsDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/latestNews" element = {<LatestNews />}/>
          <Route path = "/news/:title" element = {<NewsDetails />}/>

        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
