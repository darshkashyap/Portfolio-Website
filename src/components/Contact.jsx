import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Contact() {
  return (
    <div className="flex justify-center items-center py-12 bg-black">
      <div className="bg-gray-900 border border-white rounded-2xl shadow-xl p-10 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

        <div className="flex justify-center flex-wrap gap-8 text-white text-3xl">
          <a href="https://www.instagram.com/imustbedarsh/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/darsh-kashyap-020163369/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
          <a href="mailto:dkdarshkashyap07@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail className="hover:text-red-400 transition" />
          </a>
          <a href="https://discord.com/users/732843910111428679" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="hover:text-indigo-400 transition" />
          </a>
          <a href="https://x.com/imustbedarsh" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-300 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
