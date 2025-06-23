import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built using React and Tailwind CSS. It’s fully responsive and showcases my skills and contact info.',
    github: 'https://github.com/darshkashyap/Portfolio-Website',
  
  },
  {
    title: 'Blog Platform',
    description: 'A Back-end blog app built with Node.js, Express, and MongoDB. Users can create, edit, and delete posts.',
   github: 'https://github.com/darshkashyap/Blog-App-Backend'
   
  },
  {
    title: 'Weather App',
    description: 'A weather app using JavaScript and OpenWeather API. It provides real-time weather data for any location.',
   github: 'https://github.com/darshkashyap/Weather-App',
   
  },
      {title: 'Quiz App',
    description: 'A responsive quiz application built using React. It supports multiple-choice questions, scoring, and dynamic feedback.',
    github: 'https://github.com/darshkashyap/Quiz-App',
      }
];

function MyProjects() {
  return (
    <div className="flex justify-center items-center py-16 bg-black px-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-cyan-500/20 transition duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white flex items-center gap-2 text-sm"
                >
                  <FaGithub /> To Project
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProjects;

