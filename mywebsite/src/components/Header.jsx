import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Header = () => {
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-black text-white py-8 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <motion.div
          className="text-3xl font-bold tracking-wide text-blue-400 hover:text-white transition duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">Darsh Kashyap</Link>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex gap-6 mt-4 md:mt-0 text-lg">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
            >
              <Link to={link.path} className="hover:text-blue-400 transition duration-200">
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 mt-4 md:mt-0 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
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
            className="hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://x.com/imustbedarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
