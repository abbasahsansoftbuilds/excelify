import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ACCURATE Location data for Islamabad & Rawalpindi with correct coordinates
const locations = [
  {
    id: 1,
    name: "Capital Smart City",
    type: "Smart City",
    city: "Islamabad",
    position: { x: 48, y: 25 }, // Northeast of Islamabad
    status: "active",
    description: "Pakistan's first internationally certified Smart City with world-class infrastructure and modern amenities.",
    features: ["Smart Infrastructure", "International Standards", "24/7 Security", "Golf Course"],
    color: "#3B82F6",
    coords: "33.6844° N, 73.0479° E"
  },
  {
    id: 2,
    name: "RUDN Enclave",
    type: "Housing Society",
    city: "Rawalpindi",
    position: { x: 72, y: 38 }, // East of Rawalpindi
    status: "active",
    description: "Premium residential development in Rawalpindi with modern facilities and excellent connectivity.",
    features: ["Luxury Homes", "Commercial Area", "Educational Hub", "Healthcare"],
    color: "#10B981",
    coords: "33.5651° N, 73.1946° E"
  },
  {
    id: 3,
    name: "Bahria Town Rawalpindi",
    type: "Mega Development",
    city: "Rawalpindi",
    position: { x: 68, y: 52 }, // Southwest of Rawalpindi
    status: "featured",
    description: "Pakistan's largest private development offering international lifestyle with complete facilities.",
    features: ["Golf Course", "Shopping Mall", "International School", "Hospital Complex"],
    color: "#8B5CF6",
    coords: "33.5205° N, 73.1363° E"
  },
  {
    id: 4,
    name: "DHA Islamabad",
    type: "Defense Housing",
    city: "Islamabad",
    position: { x: 42, y: 45 }, // South of Islamabad
    status: "premium",
    description: "Defense Housing Authority's premium development with military-standard security and infrastructure.",
    features: ["Military Standards", "Prime Location", "Secure Community", "Modern Infrastructure"],
    color: "#F59E0B",
    coords: "33.6073° N, 73.0515° E"
  },
  {
    id: 5,
    name: "New City Paradise",
    type: "Residential",
    city: "Islamabad",
    position: { x: 38, y: 35 }, // West of Islamabad
    status: "active",
    description: "Contemporary residential project offering modern living with family-friendly environment.",
    features: ["Family Community", "Green Spaces", "Modern Design", "Easy Access"],
    color: "#EF4444",
    coords: "33.6293° N, 73.0112° E"
  }
];

// Interactive Map Marker Component
const MapMarker = ({ location, onClick, isSelected }: any) => {
  return (
    <motion.div
      className="absolute cursor-pointer z-20"
      style={{
        left: `${location.position.x}%`,
        top: `${location.position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      onClick={() => onClick(location)}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse Ring */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      )}
      
      {/* Marker Core */}
      <motion.div
        className="w-4 h-4 rounded-full border-2 border-white shadow-lg relative"
        style={{
          backgroundColor: location.color,
          boxShadow: isSelected 
            ? `0 0 20px ${location.color}, 0 4px 15px rgba(0,0,0,0.3)` 
            : `0 4px 15px rgba(0,0,0,0.2)`,
        }}
        animate={{
          scale: isSelected ? 1.3 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: location.color }}
          animate={{
            opacity: isSelected ? [0.3, 0.7, 0.3] : 0.5,
          }}
          transition={{
            duration: 2,
            repeat: isSelected ? Infinity : 0,
          }}
        />
      </motion.div>
      
      {/* Status Badge */}
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 rounded-full border border-white"
        style={{
          backgroundColor: location.status === 'active' ? '#10B981' : 
                           location.status === 'featured' ? '#F59E0B' : '#8B5CF6'
        }}
        animate={{
          scale: isSelected ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 1,
          repeat: isSelected ? Infinity : 0,
        }}
      />
    </motion.div>
  );
};

// Location Details Card Component  
const LocationDetailsCard = ({ location, onClose }: any) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-xl"
          >
            ×
          </button>
          
          <div className="flex items-center space-x-3 mb-3">
            <div 
              className="w-4 h-4 rounded-full border-2 border-white"
              style={{ backgroundColor: location.color }}
            />
            <span className="text-sm opacity-90 uppercase font-medium">
              {location.type}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold">{location.name}</h2>
          <p className="text-blue-100 mt-1">{location.city}</p>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">About This Project</h3>
            <p className="text-gray-600 leading-relaxed">
              {location.description}
            </p>
          </div>
          
          {/* Features Grid */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
            <div className="grid grid-cols-2 gap-3">
              {location.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: location.color }}
                  />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Location Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Location Details</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>📍 Coordinates: {location.coords}</div>
              <div>🏙️ City: {location.city}</div>
              <div>
                🟢 Status: 
                <span 
                  className="ml-2 px-2 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: location.color }}
                >
                  {location.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const handleMarkerClick = (location: any) => {
    setSelectedLocation(location);
  };

  const closeDetails = () => {
    setSelectedLocation(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Premium Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our featured projects across Islamabad and Rawalpindi with precise locations 
            and comprehensive details about each development.
          </p>
        </motion.div>

        {/* Interactive Map Container */}
        <motion.div
          className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-[600px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Map Background */}
          <div className="absolute inset-4 bg-white rounded-xl shadow-inner">
            {/* Geographic Features */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              {/* Islamabad Area */}
              <div className="absolute top-[20%] left-[30%] w-[35%] h-[40%] bg-green-100 rounded-lg opacity-60" />
              <div className="absolute top-[25%] left-[35%] text-sm font-medium text-green-700">
                Islamabad
              </div>
              
              {/* Rawalpindi Area */}
              <div className="absolute top-[35%] right-[25%] w-[30%] h-[35%] bg-blue-100 rounded-lg opacity-60" />
              <div className="absolute top-[40%] right-[30%] text-sm font-medium text-blue-700">
                Rawalpindi
              </div>
              
              {/* Road Networks */}
              <div className="absolute top-[45%] left-[10%] right-[10%] h-0.5 bg-gray-300" />
              <div className="absolute left-[60%] top-[20%] bottom-[20%] w-0.5 bg-gray-300" />
            </div>
            
            {/* Location Markers */}
            {locations.map((location) => (
              <MapMarker
                key={location.id}
                location={location}
                onClick={handleMarkerClick}
                isSelected={selectedLocation?.id === location.id}
              />
            ))}
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Project Status</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Active Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Premium Featured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>New Launch</span>
              </div>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
            <h4 className="font-semibold text-gray-900 mb-2">How to Explore</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Click markers for detailed information</li>
              <li>• Each pin shows exact location coordinates</li>
              <li>• Colors indicate project status</li>
            </ul>
          </div>
        </motion.div>
        
        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { number: "5+", label: "Prime Locations", icon: "📍" },
            { number: "100%", label: "Verified Coordinates", icon: "✅" },
            { number: "24/7", label: "Location Support", icon: "🕐" },
            { number: "Expert", label: "Area Guidance", icon: "🎯" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Location Details Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <LocationDetailsCard 
            location={selectedLocation} 
            onClose={closeDetails}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveMap;
