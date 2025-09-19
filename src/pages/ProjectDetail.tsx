import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Share2, 
  ExternalLink,
  Building,
  Home,
  Phone,
  Mail
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Project } from '@/types/project';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.slug === slug);
    setProject(foundProject || null);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button variant="outline">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

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
      case 'available': return 'Available Now';
      case 'sold-out': return 'Sold Out';
      default: return status;
    }
  };

  const shareProject = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.name,
          text: project.short_desc,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{project.name} | Excel Marketing Pvt Ltd</title>
        <meta name="description" content={project.meta_desc} />
        <meta property="og:title" content={project.name} />
        <meta property="og:description" content={project.short_desc} />
        <meta property="og:image" content={project.images[0]?.url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navigation />

      {/* Hero Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative h-full">
          <img
            src={project.images[currentImageIndex]?.url}
            alt={project.images[currentImageIndex]?.alt || project.name}
            className="w-full h-full object-cover"
          />
          
          {/* Carousel Controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          )}

          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div>
                  <nav className="mb-4">
                    <ol className="flex items-center space-x-2 text-sm text-white/80">
                      <li>
                        <Link to="/" className="hover:text-white transition-colors">
                          Home
                        </Link>
                      </li>
                      <li>/</li>
                      <li>
                        <Link to="/projects" className="hover:text-white transition-colors">
                          Projects
                        </Link>
                      </li>
                      <li>/</li>
                      <li className="text-white">{project.name}</li>
                    </ol>
                  </nav>
                  
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {project.name}
                  </h1>
                  <div className="flex items-center text-white/90 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant={getStatusColor(project.status)} className="shadow-sm">
                      {getStatusLabel(project.status)}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {project.developer}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 mt-4 md:mt-0">
                  <Button variant="outline" size="icon" onClick={shareProject} className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="hero" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-6">About {project.name}</h2>
                <div className="prose prose-gray max-w-none">
                  {project.long_desc.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Features Grid */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* External Links */}
              {project.source_urls.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Official Resources</h2>
                  <div className="space-y-3">
                    {project.source_urls.map((url, index) => (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <ExternalLink className="h-5 w-5 text-primary" />
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {url.replace('https://', '').replace('http://', '')}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Plot Sizes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Home className="h-5 w-5 mr-2" />
                    Available Plot Sizes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.plot_sizes.map((size, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">{size}</span>
                        <Badge variant="outline">Available</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Get More Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Contact our experts for detailed information about {project.name}
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:03348737244"
                      className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="font-medium">03348737244</span>
                    </a>
                    <a
                      href="mailto:excelmarketingpk@gmail.com"
                      className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="font-medium">excelmarketingpk@gmail.com</span>
                    </a>
                  </div>
                  <Button className="w-full" size="lg">
                    Schedule Site Visit
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="h-5 w-5 mr-2" />
                    Project Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Developer:</span>
                    <span className="font-medium">{project.developer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">{project.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant={getStatusColor(project.status)}>
                      {getStatusLabel(project.status)}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Plot Options:</span>
                    <span className="font-medium">{project.plot_sizes.length} sizes</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
