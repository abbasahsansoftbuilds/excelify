import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from "@/components/Navigation";
import FuturisticServices from "@/components/FuturisticServices";
import InteractiveMap from "@/components/InteractiveMap";
import FeaturedProjects from "@/components/FeaturedProjects";
import CEOProfile from "@/components/CEOProfile";
import CompanyProfileSection from "@/components/CompanyProfileSection";
import FuturisticContactSection from "@/components/FuturisticContactSection";
import FuturisticFooter from "@/components/FuturisticFooter";

const SimpleHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Clean Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              Excellence in Marketing & Real Estate
            </div>

            {/* Clean Typography */}
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white drop-shadow-sm">Excel</span>
              <span className="block text-blue-500 drop-shadow-sm">
                Marketing
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-0.5 w-16 bg-blue-500" />
              <span className="text-xl text-gray-200 font-light tracking-wide">
                Building Tomorrow's Properties Today
              </span>
              <div className="h-0.5 w-16 bg-blue-500" />
            </div>
            
            {/* High Contrast Text */}
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto font-medium">
              Transforming Islamabad & Rawalpindi's real estate landscape with 
              cutting-edge technology, innovative marketing solutions, and unparalleled 
              architectural excellence.
            </p>

            {/* Clean Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
              >
                Explore Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get Consultation
              </motion.button>
            </div>

            {/* Stats with High Contrast */}
            <div className="grid grid-cols-3 gap-8 pt-8 max-w-md mx-auto">
              {[
                { number: "500+", label: "Properties Sold" },
                { number: "15+", label: "Years Experience" },
                { number: "99%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-lg py-4 px-2">
                  <div className="text-3xl font-bold text-blue-500 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Clean Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
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

const Index = () => {
  useEffect(() => {
    console.log('Full website loading without 3D building...');
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-slate-900 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <SimpleHero />

      {/* Services Section */}
      <FuturisticServices />

      {/* Interactive Map */}
      <InteractiveMap />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* CEO Profile */}
      <CEOProfile />

      {/* Company Profile */}
      <CompanyProfileSection />

      {/* Contact Section */}
      <FuturisticContactSection />

      {/* Footer */}
      <FuturisticFooter />

      {/* Floating Action Elements */}
      <div className="fixed bottom-4 left-4 z-50 space-y-3">
        {/* WhatsApp Float Button */}
        <motion.a
          href="https://wa.me/923348737244"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
          }}
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.53 4.136 1.539 5.936L.029 24l6.203-1.539c1.75.96 3.712 1.477 5.785 1.477 6.621 0 11.988-5.367 11.988-11.987C23.005 5.367 17.638.001 12.017.001zm5.765 16.963c-.297.662-1.475 1.234-2.043 1.315-.568.081-1.315.081-2.123-.245-.486-.162-1.108-.378-1.909-.743-3.37-1.539-5.582-4.99-5.75-5.22-.162-.243-1.369-1.83-1.369-3.472s.865-2.448 1.19-2.799c.324-.351.703-.432.946-.432.243 0 .486.001.703.013.225.013.527-.081.825.649.297.73 1.013 2.475 1.094 2.664.081.189.135.432.027.703-.108.27-.162.432-.324.648-.162.216-.324.486-.486.649-.162.162-.351.351-.135.703.216.351.946 1.566 2.043 2.529 1.423 1.234 2.583 1.585 2.988 1.774.405.189.648.162.865-.108.216-.27.946-1.108 1.207-1.478.27-.378.514-.324.865-.189.351.135 2.232 1.053 2.610 1.234.378.189.648.297.743.459.108.162.108.946-.189 1.601z"/>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Index;
