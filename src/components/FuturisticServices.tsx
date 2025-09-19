import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, TrendingUp, FileCheck, MapPin, Award, Users, Clock } from 'lucide-react';

const FuturisticServices = () => {
  const services = [
    {
      icon: Search,
      title: "Property Search & Analysis",
      description: "Expert property discovery with detailed market analysis and location insights for informed decision making.",
      features: ["Market Research", "Location Analysis", "Price Comparison", "Investment Potential"],
      color: "#3B82F6",
      bgColor: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Legal Verification",
      description: "Comprehensive legal documentation and verification services ensuring complete transparency and security.",
      features: ["Document Verification", "Title Clearance", "Legal Compliance", "Risk Assessment"],
      color: "#10B981",
      bgColor: "bg-green-50"
    },
    {
      icon: TrendingUp,
      title: "Investment Consultation",
      description: "Strategic investment guidance with market trend analysis and portfolio optimization for maximum returns.",
      features: ["Investment Strategy", "Market Trends", "ROI Analysis", "Portfolio Planning"],
      color: "#8B5CF6",
      bgColor: "bg-purple-50"
    },
    {
      icon: FileCheck,
      title: "Documentation Services",
      description: "Complete documentation support from property registration to ownership transfer with legal compliance.",
      features: ["Registration", "Transfer Deeds", "NOCs", "Tax Documentation"],
      color: "#F59E0B",
      bgColor: "bg-yellow-50"
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Advanced location analysis including infrastructure, amenities, and future development prospects.",
      features: ["Infrastructure Analysis", "Amenity Mapping", "Growth Potential", "Connectivity"],
      color: "#EF4444",
      bgColor: "bg-red-50"
    },
    {
      icon: Award,
      title: "Property Management",
      description: "Complete property management solutions from maintenance to rental management and value enhancement.",
      features: ["Maintenance", "Rental Management", "Value Enhancement", "Tenant Services"],
      color: "#06B6D4",
      bgColor: "bg-cyan-50"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", description: "Satisfied customers" },
    { icon: Award, number: "15+", label: "Years Experience", description: "Industry expertise" },
    { icon: Shield, number: "100%", label: "Legal Verified", description: "Secure transactions" },
    { icon: Clock, number: "24/7", label: "Support", description: "Always available" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From property discovery to final ownership, we provide end-to-end services 
            with professional excellence and complete transparency.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl ${service.bgColor} border border-gray-200 hover:shadow-lg transition-all group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white mr-4"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Why Choose Excel Marketing?
            </h3>
            <p className="text-blue-100">
              Trusted by hundreds of clients for exceptional real estate services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-blue-200">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Real Estate Journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact our expert team today for personalized consultation and professional service.
          </p>
          <motion.a
            href="tel:03348737244"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Today</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticServices;
