import React from 'react';

const projects = [
  {
    title: 'Blog App Backend',
    link: 'https://github.com/darshkashyap/Blog-App-Backend',
    description: 'A backend service for managing blogs using Node.js, Express, MongoDB, and JWT authentication.',
  },
  {
    title: 'Quiz App',
    link: 'https://github.com/darshkashyap/Quiz-App',
    description: 'A quiz application with scoring, categories, and smooth UI built using HTML, CSS, and JavaScript.',
  },
  {
    title: 'Weather App',
    link: 'https://github.com/darshkashyap/Weather-App',
    description: 'A simple weather app using OpenWeatherMap API to show real-time weather data by city name.',
  },
  {
    title: 'BlogApp Fulstack',
    link: 'https://github.com/darshkashyap/BlogApp',
    description: 'A full-stack blog application with user authentication, CRUD operations, and a responsive design.',}
];

const Project = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-12">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:border-cyan-400 transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-cyan-300">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;
