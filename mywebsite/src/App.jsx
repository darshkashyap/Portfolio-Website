import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

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
  const [isLoading, setIsLoading] = useState(true); // Show loading on each visit

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Always show loading screen for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="relative bg-black text-white font-sans min-h-screen flex flex-col overflow-hidden">
        {/* Animated Background */}
        <BackgroundBlobs />

        {/* Layout */}
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
