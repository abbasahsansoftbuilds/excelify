import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BuildingConstruction from './3D/BuildingConstruction';

const FuturisticHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyber-dark via-slate-900 to-cyber-dark overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
            }}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="px-6 lg:px-16 py-20 space-y-8">
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium"
          >
            <span className="w-2 h-2 bg-neon-blue rounded-full mr-2 animate-pulse" />
            Excellence in Marketing & Real Estate
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="block text-white">Excel</span>
              <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-clip-text text-transparent animate-pulse">
                Marketing
              </span>
            </h1>
            <div className="flex items-center space-x-3">
              <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-neon-purple" />
              <span className="text-xl text-gray-300 font-light tracking-wide">
                Building Tomorrow's Properties Today
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            Transforming Islamabad & Rawalpindi's real estate landscape with 
            cutting-edge technology, innovative marketing solutions, and unparalleled 
            architectural excellence.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-neon-blue/50"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(0, 217, 255, 1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-neon-blue/50 text-neon-blue font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-neon-blue/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Consultation
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-8 pt-8"
          >
            {[
              { number: "500+", label: "Properties Sold" },
              { number: "15+", label: "Years Experience" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content - 3D Building Animation */}
        <div className="relative h-screen lg:h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-full h-full"
          >
            <Canvas
              camera={{ position: [0, 0, 10], fov: 50 }}
              className="w-full h-full"
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00D9FF" />
                <BuildingConstruction onComplete={() => console.log('Building construction complete')} />
                <OrbitControls 
                  enableZoom={false} 
                  autoRotate 
                  autoRotateSpeed={1}
                  enablePan={false}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 1.5}
                />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Overlay Elements */}
          <div className="absolute bottom-10 left-10 right-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="bg-black/40 backdrop-blur-md border border-neon-blue/30 rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-neon-blue text-sm font-medium">
                    Live Construction Progress
                  </div>
                  <div className="text-white text-lg font-semibold">
                    Smart City Tower
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm">Active</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-neon-blue"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FuturisticHero;
