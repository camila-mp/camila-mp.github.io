import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './Pages/NotFound';
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
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/projects" element={ <Projects /> } />
        <Route exact path="/home" element={ <Home /> } />
        <Route exact path="/" element={ <Navigate replace to="/home" /> } />
        <Route path="*" exact="true" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
