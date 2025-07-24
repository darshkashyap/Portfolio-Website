import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">About Me</h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I'm Darsh Kashyap, a web developer from India who loves building interactive and elegant digital experiences.
          My passion lies in crafting intuitive and responsive user interfaces using technologies like <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Tailwind CSS</span>, and <span className="text-white font-semibold">Node.js</span>.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I enjoy working on full-stack projects, solving real-world problems through code, and continuously learning new tools and frameworks. Whether it's building sleek frontends or integrating REST APIs, I aim to write clean, maintainable, and efficient code.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Outside of coding, I enjoy exploring new tech, listening to music, and connecting with like-minded developers in the community.
        </p>
      </div>
    </section>
  );
};

export default About;
