import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <motion.div
        className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Text */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Darsh Kashyap. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <motion.a
            href="https://github.com/darshkashyap"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/darsh-kashyap-020163369/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://x.com/imustbedarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/imustbedarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://discord.com/users/732843910111428679"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-950"
            whileHover={{ scale: 1.2 }}
          >
            <FaDiscord />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
