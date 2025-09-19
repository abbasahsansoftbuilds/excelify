import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects';

const FeaturedLocationsWidget = () => {
  // Group projects by city and get top projects for Islamabad and Rawalpindi only
  const featuredCities = [
    {
      city: 'Islamabad',
      projects: projectsData.filter(p => p.city === 'Islamabad'),
      count: projectsData.filter(p => p.city === 'Islamabad').length + '+'
    },
    {
      city: 'Rawalpindi', 
      projects: [], // Add Rawalpindi projects when available
      count: '5+'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Top Locations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Islamabad & Rawalpindi Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our premium properties exclusively in Islamabad and Rawalpindi
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {featuredCities.map((cityData, index) => {
            const topProject = cityData.projects[0]; // Get the first project as featured
            
            return (
              <Card key={index} className="group hover:shadow-elevated transition-smooth overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  {topProject ? (
                    <img
                      src={topProject.images[0]?.url}
                      alt={`${cityData.city} properties`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Coming Soon</span>
                    </div>
                  )}
                  
                  {/* Property Count Badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span className="text-xs font-medium">{cityData.count} Properties</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {cityData.city}
                    </h3>
                  </div>
                  
                  {topProject ? (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Featured Project:</p>
                      <p className="font-medium text-sm">{topProject.name}</p>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">Properties coming soon</p>
                    </div>
                  )}
                  
                  {topProject ? (
                    <Link to={`/projects/${topProject.slug}`}>
                      <Button variant="outline" size="sm" className="w-full group/btn">
                        View Projects
                        <ArrowRight className="h-3 w-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* All Projects Button */}
        <div className="text-center">
          <Link to="/projects">
            <Button variant="hero" size="lg" className="group">
              View All Projects
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocationsWidget;
