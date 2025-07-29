import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Text */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Darsh Kashyap. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/darshkashyap"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/darsh-kashyap-020163369/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/imustbedarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/imustbedarsh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://discord.com/users/732843910111428679"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-950 transition duration-300"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
