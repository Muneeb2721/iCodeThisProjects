import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import './App.css'
import About from './components/About';
import Skill from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App; 