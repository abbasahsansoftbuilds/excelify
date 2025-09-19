import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, Building2, Award, ChevronDown } from 'lucide-react';

interface CEOProfileProps {
  className?: string;
}

const CEOProfile: React.FC<CEOProfileProps> = ({ className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const ceoData = {
    name: "Waheed ur Rehman Farooqui",
    title: "Chief Executive Officer",
    email: "excelmarketingpk@gmail.com",
    bio: "Leading Excel Marketing Pvt Ltd with visionary leadership in real estate innovation. Specialized in transforming property markets in Islamabad & Rawalpindi through cutting-edge solutions and strategic partnerships.",
    achievements: [
      "20+ Years in Real Estate",
      "1000+ Successful Transactions", 
      "Expert in Legal Consultancy",
      "Leading Property Development"
    ]
  };

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
            <span className="text-blue-600 font-semibold">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Visionary CEO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving innovation and excellence in real estate solutions
          </p>
        </motion.div>

        {/* CEO Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Avatar */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <User className="w-16 h-16 lg:w-20 lg:h-20 text-blue-600" />
                  </div>
                </div>
                
                {/* Status indicator */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div className="mb-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {ceoData.name}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold">
                    {ceoData.title}
                  </p>
                </motion.div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <motion.a
                    href={`mailto:${ceoData.email}`}
                    className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{ceoData.email}</span>
                  </motion.a>
                </div>

                {/* Expand Indicator */}
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-2 text-blue-600 font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span>Click to {isExpanded ? 'collapse' : 'expand'} profile</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-white mt-6 p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Bio */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Building2 className="w-6 h-6 text-blue-600" />
                        About
                      </h4>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {ceoData.bio}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Award className="w-6 h-6 text-purple-600" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {ceoData.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <motion.div
                              className="w-3 h-3 bg-green-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: index * 0.2 
                              }}
                            />
                            <span className="text-gray-700 font-medium">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CEOProfile;
