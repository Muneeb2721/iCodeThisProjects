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

// https://i-code-this-projects.vercel.app
// https://claude.ai/public/artifacts/d6c8c6b6-75a7-440a-892b-f1a79f0200fa?fullscreen=true