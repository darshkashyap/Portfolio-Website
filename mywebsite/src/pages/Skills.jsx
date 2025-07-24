import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400 text-3xl" /> },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-12">My Skills</h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col items-center hover:border-cyan-400 transition duration-300 shadow-md w-40"
          >
            {skill.icon}
            <span className="mt-4 text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
