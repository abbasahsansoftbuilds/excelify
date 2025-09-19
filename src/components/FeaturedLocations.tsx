import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const FeaturedLocations = () => {
  const locations = [
    {
      id: 1,
      title: "DHA Islamabad",
      subtitle: "Premium Gated Community",
      location: "Islamabad",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Bahria Town Rawalpindi",
      subtitle: "Luxury Residential Complex",
      location: "Rawalpindi",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Capital Smart City",
      subtitle: "Pakistan's First Smart City",
      location: "Islamabad",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=500&h=300&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "RUDN Enclave",
      subtitle: "Modern Residential Development",
      location: "Rawalpindi",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Prime Locations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Islamabad & Rawalpindi Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully selected premium properties exclusively in Islamabad and Rawalpindi
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location) => (
            <Card key={location.id} className="group hover:shadow-elevated transition-smooth overflow-hidden">
              <div className="relative overflow-hidden h-48">
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                {location.featured && (
                  <Badge className="absolute top-4 right-4 bg-luxury-gold text-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {location.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {location.subtitle}
                </p>
                <div className="flex items-center text-primary">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{location.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocations;
