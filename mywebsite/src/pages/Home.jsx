import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white">
      {/* Profile Image */}
      <img
        src="/Darsh.png" // Make sure this file is in your public/ folder
        alt="Darsh Kashyap"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover mb-6 shadow-lg border-2 border-blue-400"
      />

      {/* Intro Text */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">Darsh Kashyap</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-300 max-w-2xl">
        I'm a passionate web developer from India, focused on building fast, responsive, and modern web applications using React, Tailwind CSS, and Node.js. I love writing clean code and creating intuitive user experiences.
      </p>
    </section>
  );
};

export default Home;
