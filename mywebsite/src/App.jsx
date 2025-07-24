import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check localStorage flag
    return localStorage.getItem('hasLoadedBefore') !== 'true';
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Set flag so loading screen doesn’t appear again
        localStorage.setItem('hasLoadedBefore', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="bg-black text-white font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
