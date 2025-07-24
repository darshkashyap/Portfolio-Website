import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-black text-white py-8 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <div className="text-3xl font-bold tracking-wide text-blue-400 hover:text-white transition duration-300">
        <a href="/">Darsh Kashyap</a>  
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 mt-4 md:mt-0 text-lg">
          <a href="/about" className="hover:text-blue-400 transition duration-200">About</a>
          <a href="/projects" className="hover:text-blue-400 transition duration-200">Projects</a>
          <a href="/skills" className="hover:text-blue-400 transition duration-200">Skills</a>
          <a href="/contact" className="hover:text-blue-400 transition duration-200">Contact</a>
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
