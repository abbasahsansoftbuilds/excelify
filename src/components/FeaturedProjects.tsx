import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from "@/data/projects";

const FeaturedProjects = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');

  // Filter projects based on selection
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.type === filter);

  const getPropertyIcon = (type: string) => {
    return type === 'Commercial' ? '🏢' : '🏠';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'developed': return 'bg-green-100 text-green-800 border-green-200';
      case 'development': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pre-launch': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover premium residential and commercial properties in 
            <span className="font-semibold text-blue-600"> Islamabad & Rawalpindi</span>
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            {['All', 'Residential', 'Commercial'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType as 'All' | 'Residential' | 'Commercial')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === filterType
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filterType === 'All' && '🏘️'} 
                {filterType === 'Residential' && '🏠'} 
                {filterType === 'Commercial' && '🏢'} 
                {' '}{filterType}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
                    {getPropertyIcon(project.type)}
                  </div>
                </div>
                
                {/* Property Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.type === 'Commercial' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {getPropertyIcon(project.type)} {project.type}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500">📍 {project.location}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.short_desc}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Plot Sizes */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Sizes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.plot_sizes.slice(0, 3).map((size, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { number: projectsData.filter(p => p.type === 'Residential').length, label: "🏠 Residential Projects", color: "text-green-600" },
            { number: projectsData.filter(p => p.type === 'Commercial').length, label: "🏢 Commercial Projects", color: "text-purple-600" },
            { number: projectsData.filter(p => p.city === 'Islamabad').length, label: "🏛️ Islamabad", color: "text-blue-600" },
            { number: projectsData.filter(p => p.city === 'Rawalpindi').length, label: "🌆 Rawalpindi", color: "text-orange-600" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;