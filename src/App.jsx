import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div id="app-container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Navigate replace to="/home" /> } />
        <Route path="/home" element={ <Home /> } />
        <Route exact path="/portfolio/about" element={ <About /> } />
        <Route exact path="/portfolio/projects" element={ <Projects /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
