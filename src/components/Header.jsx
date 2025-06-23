import React from 'react';

function Header() {
  return (
    <div className="flex justify-center items-center py-12 bg-black">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-10 w-full max-w-4xl text-center">
        <img
          src="/Darsh.png" 
          alt="Darsh Kashyap"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-400 object-cover"
        />

        <h1 className="text-4xl font-extrabold mb-4">
          Hi, My Name is <span className="text-white">Darsh Kashyap👨🏽‍💻</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed font-semibold">
          I'm a 17-year-old full-stack developer with a passion for building modern, responsive web applications.
          <br />
          I specialize in working with technologies like React, Node.js, Express, and MongoDB.
        </p>
      </div>
    </div>
  );
}

export default Header;