import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-12">
          I'm always open to opportunities, collaborations, or just a good tech chat. Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 items-center mb-8">
          <div className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-cyan-400" />
            <span>dkdarshkashyap07@gmail.com</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-2xl text-gray-300">
          <a href="https://github.com/darshkashyap" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/darsh-kashyap-020163369/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/imustbedarsh" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaInstagram />
          </a>
          <a href="https://x.com/imustbedarsh" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
