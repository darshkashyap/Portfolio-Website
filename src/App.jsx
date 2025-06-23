import Header from './components/Header';
import Loading from './components/Loading';
import './App.css';
import React, { useEffect, useState } from 'react';
import './components/Skills'
import Skills from './components/Skills';
import './components/Contact'
import Contact from './components/Contact';
import MyProjects from './components/Myprojects';

  



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (like API/data/assets)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
   

      <div className="min-h-screen bg-black text-white relative z-20">
      
     <Header/>   
     <Skills/>
     <MyProjects/>
     <Contact/>
      
      
      </div>

  
);

}

export default App;