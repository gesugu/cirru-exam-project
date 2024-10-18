import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import MainPage from './components/MainPage'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { Provider } from 'react-redux';
import store from './redux/store'
import Cash from './components/Cash';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cash" element={<Cash />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
