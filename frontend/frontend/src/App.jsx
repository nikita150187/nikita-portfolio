// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects'; 
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Header />
      <About />
      <Resume />
      <Projects /> 
      <Contact />
    </div>
  );
}

export default App;
