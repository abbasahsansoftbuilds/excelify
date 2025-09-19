import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowUp,
  ExternalLink,
  Zap,
  Shield,
  Award,
  Users,
  ChevronRight
} from 'lucide-react';

interface FuturisticFooterProps {
  className?: string;
}

const FuturisticFooter: React.FC<FuturisticFooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      icon: Building2,
      links: [
        { name: "Property Buying", href: "#services" },
        { name: "Property Selling", href: "#services" },
        { name: "Legal Consultancy", href: "#services" },
        { name: "Possession & Rental", href: "#services" },
        { name: "Overseas Guidance", href: "#services" },
        { name: "Construction Services", href: "#services" }
      ]
    },
    {
      title: "Coverage Areas",
      icon: MapPin,
      links: [
        { name: "Islamabad Properties", href: "#projects" },
        { name: "Rawalpindi Properties", href: "#projects" },
        { name: "Capital Smart City", href: "#projects" },
        { name: "RUDN Enclave", href: "#projects" },
        { name: "DHA Islamabad", href: "#projects" },
        { name: "Bahria Town", href: "#projects" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "CEO Profile", href: "#ceo" },
        { name: "Achievements", href: "#achievements" },
        { name: "Partnerships", href: "#partnerships" },
        { name: "Career", href: "#career" }
      ]
    }
  ];

  const quickStats = [
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Building2, value: "500+", label: "Properties Sold" },
    { icon: Shield, value: "100%", label: "Trust & Safety" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Floating orbs animation
  const FloatingOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              ['#00D9FF', '#A855F7', '#F472B6', '#10B981'][i % 4]
            }, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-50, 50],
            x: [-30, 30],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <footer className={`relative bg-gradient-to-b from-cyber-dark via-cyber-surface to-black border-t border-cyber-border ${className}`}>
      <FloatingOrbs />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(0, 217, 255, 0.3)",
                      "0 0 20px rgba(0, 217, 255, 0.5)",
                      "0 0 10px rgba(0, 217, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Building2 className="w-8 h-8 text-neon-blue" />
                  <h3 className="text-2xl font-display font-bold text-white">
                    Excel Marketing
                  </h3>
                </motion.div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Leading real estate consultancy in Islamabad & Rawalpindi. 
                  Transforming property dreams into reality with cutting-edge 
                  solutions and expert guidance.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <motion.a
                    href="tel:03348737244"
                    className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>03348737244</span>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:excelmarketingpk@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-neon-purple transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>excelmarketingpk@gmail.com</span>
                  </motion.a>
                  
                  <motion.div
                    className="flex items-center gap-3 text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Islamabad & Rawalpindi</span>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center gap-3 text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <Clock className="w-5 h-5" />
                    <span>24/7 Available</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                    <IconComponent className={`w-5 h-5 text-${
                      ['neon-blue', 'neon-purple', 'neon-pink'][sectionIndex % 3]
                    }`} />
                    {section.title}
                  </h4>
                  
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: linkIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.a
                          href={link.href}
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                          whileHover={{ x: 5 }}
                        >
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span>{link.name}</span>
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="card-cyber p-6 text-center"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(0, 217, 255, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg mb-4"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-2xl font-bold text-neon-cyan mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="card-cyber p-8 mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="max-w-2xl mx-auto"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(0, 217, 255, 0.3)",
                  "0 0 30px rgba(168, 85, 247, 0.3)",
                  "0 0 20px rgba(0, 217, 255, 0.3)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <h3 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-neon mb-4">
                Ready to Find Your Dream Property?
              </h3>
              <p className="text-gray-300 mb-6">
                Join thousands of satisfied clients who trusted Excel Marketing for their real estate needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="btn-cyber px-8 py-3 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started Today
                </motion.a>
                
                <motion.a
                  href="tel:03348737244"
                  className="flex items-center justify-center gap-2 px-8 py-3 border border-neon-blue/30 rounded-lg text-neon-blue hover:bg-neon-blue hover:text-cyber-dark transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cyber-border">
            <motion.div
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} Excel Marketing Pvt Ltd. All rights reserved.
            </motion.div>
            
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://zameen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Partner with zameen.com
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              
              <motion.div
                className="text-gray-600 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                •
              </motion.div>
              
              <motion.span
                className="text-gray-400 text-sm"
                animate={{ 
                  color: ["#9CA3AF", "#00D9FF", "#A855F7", "#9CA3AF"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Built with cutting-edge technology
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center border border-neon-blue/30 backdrop-blur-sm z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </footer>
  );
};

export default FuturisticFooter;
