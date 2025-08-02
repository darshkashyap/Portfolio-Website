import React from 'react';
import { motion } from 'framer-motion';
const floatingVariant = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
const BackgroundBlobs = () => {
 return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blue circle */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-96 h-96 rounded-full bg-cyan-500 opacity-20 blur-[120px]"
        variants={floatingVariant}
        animate="animate"
      />
      {/* Pink ellipse */}
      <motion.div
        className="absolute top-[40%] right-[-120px] w-[500px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-[120px]"
        style={{ transform: 'rotate(45deg)' }}
        variants={floatingVariant}
        animate="animate"
      />
      {/* Purple circle */}
      <motion.div
        className="absolute bottom-[-150px] left-[20%] w-[400px] h-[400px] bg-purple-600 opacity-20 rounded-full blur-[100px]"
        variants={floatingVariant}
        animate="animate"
      />
    </div>
  );
};

export default BackgroundBlobs;
