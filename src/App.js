import React from 'react';
import { FaAngellist, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BrowserRouter as Router } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Cover from './components/Cover';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

const App = () => {
  const icons = [
    { id: uuidv4(), href: 'https://github.com/dicodiaz', src: FaGithub },
    { id: uuidv4(), href: 'https://www.linkedin.com/in/dico-diaz-dussan/', src: FaLinkedinIn },
    { id: uuidv4(), href: 'https://angel.co/u/dico-diaz-dussan', src: FaAngellist },
  ];
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <main>
        <Cover icons={icons} />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </main>
    </Router>
  );
};

export default App;
