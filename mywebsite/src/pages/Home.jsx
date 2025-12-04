import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white overflow-hidden">
      
      <motion.img
        src="/Darsh.png"
        alt="Darsh Kashyap"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover mb-6 shadow-lg border-2 border-blue-400 z-10"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I'm <span className="text-blue-400">Darsh Kashyap</span>
      </motion.h1>

      
      <motion.p
        className="text-lg text-gray-300 max-w-2xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I'm a passionate web developer from India, focused on building fast, responsive, and modern web applications using React, Tailwind CSS, and Node.js. I love writing clean code and creating intuitive user experiences.
        <br/> Currently Working on Building Projects Using Framer-motion.
      </motion.p>
    </section>
  );
};

export default Home;
