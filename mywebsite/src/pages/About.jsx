import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true 
    });
  }, []);

  const skills = [
    'React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js',
    'HTML/CSS', 'Git', 'REST APIs', 'TypeScript', 'Next.js'
  ];

  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">About Me</h2>
          
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         
          <div>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              data-aos="fade-right"
            >
              I'm <span className="text-cyan-300 font-semibold">Darsh Kashyap</span>, a passionate web developer from India who loves building interactive and elegant digital experiences. My focus is on creating intuitive user interfaces with modern technologies.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              I specialize in <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Tailwind CSS</span>, and <span className="text-white font-semibold">Node.js</span>, and enjoy working on full-stack projects that solve real-world problems.
            </motion.p>

            <motion.div
              className="mb-6 p-4 bg-gray-900 rounded-lg border-l-4 border-cyan-500"
              data-aos="fade-up"
            >
              <p className="text-lg text-cyan-300 leading-relaxed font-bold">
                Currently learning <span className="text-white">TypeScript</span> and building a production-ready clothing e-commerce app.
              </p>
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              When I'm not coding, you can find me exploring new tech, listening to music, or connecting with other developers in the community.
            </motion.p>
          </div>

         
          <motion.div
            className="bg-gray-900 rounded-xl p-8 border border-gray-800"
            data-aos="fade-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-300 text-center">Skills & Technologies</h3>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 text-cyan-200 rounded-full text-sm font-medium border border-gray-700"
                  whileHover={{ scale: 1.05, backgroundColor: '#0e7490' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 pt-6 border-t border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-400 text-center">
                Always learning and expanding my skill set
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;