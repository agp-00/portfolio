import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NewsLetter from './pages/NewsLetter';
import ButtonLink from './components/ButtonLink';
import Footer from './components/Footer';

export default App;
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ButtonLink to="/">Home</ButtonLink>
          <ButtonLink to="/about">About</ButtonLink>
          <ButtonLink to="/projects">Projects</ButtonLink>
            <ButtonLink to="/contact">Contact</ButtonLink>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/newsletter" element={<NewsLetter />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}