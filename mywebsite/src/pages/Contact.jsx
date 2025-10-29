import React, { useEffect } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

//  const handleDownloadResume = () => {
 //   const resumeUrl = '/resume.pdf';
    
 //   const link = document.createElement('a');
 //   link.href = resumeUrl;
 //   link.setAttribute('download', 'Darsh_Kashyap_Resume.pdf');
 //   document.body.appendChild(link);
 //   link.click();
  //  document.body.removeChild(link);
 // };

  return (
    <section id="contact" className="min-h-screen bg-black text-white px-6 py-20">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-12">
          I'm always open to opportunities, collaborations, or a good tech chat. Feel free to reach out!
        </p>

        {/* Download Resume Button - Added this section */}
        <motion.button
          onClick={handleDownloadResume}
          className="flex items-center gap-2 mx-auto mb-10 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload />
          Download Resume
        </motion.button>

        <div className="flex flex-col items-center gap-4 mb-10">
          <motion.div
            className="flex items-center gap-3 text-lg"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-cyan-400" />
            <span>dkdarshkashyap07@gmail.com</span>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center gap-6 text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/darshkashyap" className="hover:text-cyan-400"><FaGithub /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/darsh-kashyap-020163369/" className="hover:text-cyan-400"><FaLinkedin /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/imustbedarsh" className="hover:text-cyan-400"><FaInstagram /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://x.com/imustbedarsh" className="hover:text-cyan-400"><FaTwitter /></motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
