import React from 'react';

function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-6">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

      {/* Typing effect */}
      <div className="text-xl font-mono">
        <span className="animate-typing inline-block overflow-hidden border-r-2 border-white whitespace-nowrap">
          Loading Darsh Kashyap's Portfolio Website...
        </span>
      </div>

      {/* Pulsing dots */}
      <div className="flex gap-2 mt-4">
        <span className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></span>
        <span className="w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-150"></span>
        <span className="w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-300"></span>
      </div>
    </div>
  );
}

export default Loading;
