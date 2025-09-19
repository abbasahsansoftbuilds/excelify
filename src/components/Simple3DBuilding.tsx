import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';

// Simple CSS-based 3D building animation as fallback
const CSS3DBuilding = () => {
  return (
    <div className="relative w-full h-96 flex items-end justify-center">
      {/* Building Base */}
      <motion.div
        className="relative bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-lg shadow-2xl"
        style={{ 
          width: '120px', 
          height: '200px',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Windows */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-300 rounded-sm shadow-lg"
            style={{
              width: '12px',
              height: '12px',
              left: `${20 + (i % 3) * 25}px`,
              top: `${20 + Math.floor(i / 3) * 30}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
          />
        ))}
        
        {/* Construction crane */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-yellow-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2, duration: 1 }}
        />
        
        {/* Building name */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-cyan-400 text-sm font-bold">Smart Tower</div>
          <div className="text-gray-400 text-xs">Under Construction</div>
        </div>
      </motion.div>

      {/* Particle effects */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 300}px`,
            bottom: `${Math.random() * 100}px`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Main component with error boundary
const Simple3DBuilding = () => {
  const [use3D, setUse3D] = useState(false);
  const [buildingReady, setBuildingReady] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Building Animation */}
      <div className="mb-8">
        <CSS3DBuilding />
      </div>

      {/* Controls */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm">Building Animation Active</span>
        </div>
        
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setUse3D(!use3D)}
        >
          {use3D ? 'Switch to CSS Animation' : 'Enable Advanced 3D (Coming Soon)'}
        </motion.button>

        {use3D && (
          <div className="text-yellow-400 text-sm">
            ⚠️ Advanced 3D features require additional optimization
          </div>
        )}
      </div>
    </div>
  );
};

export default Simple3DBuilding;
