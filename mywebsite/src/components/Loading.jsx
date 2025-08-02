import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Spinning Glow Ring */}
        <motion.div
          className="w-24 h-24 border-4 border-cyan-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 1.5,
          }}
        />

        {/* Typing-style Animated Text */}
        <motion.div
          className="text-xl font-mono text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-cyan-400">Loading</span> Darsh Kashyap's Portfolio...
        </motion.div>

        {/* Bouncing dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
