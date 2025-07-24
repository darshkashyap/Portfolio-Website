import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-black text-white py-8 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <div className="text-3xl font-bold tracking-wide text-blue-400 hover:text-white transition duration-300">
          <Link to="/">Darsh Kashyap</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 mt-4 md:mt-0 text-lg">
          <Link to="/about" className="hover:text-blue-400 transition duration-200">About</Link>
          <Link to="/projects" className="hover:text-blue-400 transition duration-200">Projects</Link>
          <Link to="/skills" className="hover:text-blue-400 transition duration-200">Skills</Link>
          <Link to="/contact" className="hover:text-blue-400 transition duration-200">Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          <a href="https://github.com/darshkashyap" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/darsh-kashyap-020163369/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://x.com/imustbedarsh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

