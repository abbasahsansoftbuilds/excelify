import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'success';
      case 'pre-launch': return 'default';
      case 'development': return 'warning';
      case 'sold-out': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pre-launch': return 'Pre-Launch';
      case 'development': return 'Under Development';
      case 'available': return 'Available';
      case 'sold-out': return 'Sold Out';
      default: return status;
    }
  };

  return (
    <Card 
      className={`group hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 bg-white ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hero Image with Carousel Preview */}
      <div className="relative overflow-hidden h-64">
        <img
          src={project.images[currentImageIndex]?.url || project.images[0]?.url}
          alt={project.images[currentImageIndex]?.alt || project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Property Type Badge */}
        <div className="absolute top-4 left-4">
          <Badge 
            variant={project.type === 'Commercial' ? 'destructive' : 'default'} 
            className="shadow-sm font-semibold"
          >
            {project.type}
          </Badge>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant={getStatusColor(project.status)} className="shadow-sm">
            {getStatusLabel(project.status)}
          </Badge>
        </div>

        {/* City Badge */}
        <div className="absolute bottom-4 right-4">
          <Badge variant="secondary" className="shadow-sm bg-white/90 backdrop-blur-sm text-gray-700">
            {project.city}
          </Badge>
        </div>

        {/* Mini Carousel on Hover */}
        {isHovered && project.images.length > 1 && (
          <div className="absolute bottom-4 left-4 right-16">
            <div className="flex space-x-2 justify-center">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Project Details */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{project.location}</span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {project.short_desc}
          </p>
        </div>

        {/* Developer */}
        <div className="mb-4">
          <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
            {project.developer}
          </Badge>
        </div>

        {/* Plot Sizes Preview */}
        <div className="mb-6">
          <div className="text-xs text-gray-500 mb-2 font-medium">Available Sizes:</div>
          <div className="flex flex-wrap gap-1">
            {project.plot_sizes.slice(0, 3).map((size, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                {size}
              </Badge>
            ))}
            {project.plot_sizes.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                +{project.plot_sizes.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Link to={`/projects/${project.slug}`}>
          <Button variant="outline" className="w-full group/btn border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            View Details
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
