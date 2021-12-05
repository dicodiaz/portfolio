import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <Home />
    <About />
  </Router>
);

export default App;
