import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

function Skills() {
  return (
    <section className="bg-black text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Skills:</h2>

      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center">
          <FaHtml5 size={50} className="text-orange-500" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt size={50} className="text-blue-500" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJs size={50} className="text-yellow-400" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact size={50} className="text-cyan-400" />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress size={50} className="text-gray-300" />
          <p className="mt-2">Express</p>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb size={50} className="text-green-500" />
          <p className="mt-2">MongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;