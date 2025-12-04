import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center">
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">About Me</h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed mb-6"
          data-aos="fade-up"
        >
          I'm Darsh Kashyap, a web developer from India who loves building interactive and elegant digital experiences.
          My passion lies in crafting intuitive and responsive user interfaces using technologies like
          <span className="text-white font-semibold"> React</span>, <span className="text-white font-semibold">Tailwind CSS</span>, and <span className="text-white font-semibold">Node.js</span>.
        </motion.p>

        <motion.p className='text-lg text-gray-300 leading-relaxed mb-7 font-bold'>Currently Learning Typescript and building a production ready Clothes selling App</motion.p>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed mb-6"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          I enjoy working on full-stack projects, solving real-world problems through code, and continuously learning new tools and frameworks.
          Whether it's building sleek frontends or integrating REST APIs, I aim to write clean, maintainable, and efficient code.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Outside of coding, I enjoy exploring new tech, listening to music, and connecting with like-minded developers in the community.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;