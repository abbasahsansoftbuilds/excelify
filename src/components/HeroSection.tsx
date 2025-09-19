import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury property showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 mr-2 text-luxury-gold" />
              <span className="text-sm font-medium">Premium Real Estate Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Every dream home becomes reality with the 
              <span className="text-luxury-gold"> right partner</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Discover premium residential and commercial properties across Pakistan. 
              From luxury villas to modern apartments, we make your property dreams come true.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Explore Projects
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Play className="h-5 w-5 mr-2" />
                Watch Virtual Tour
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-luxury-gold mb-1">500+</div>
                <div className="text-sm text-white/80">Properties Sold</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-luxury-gold mb-1">50+</div>
                <div className="text-sm text-white/80">Active Projects</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-luxury-gold mb-1">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Property Highlights */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Featured Locations</h3>
              {[
                { location: "Islamabad", properties: "120+ Properties", highlight: "Capital City" },
                { location: "Karachi", properties: "200+ Properties", highlight: "Business Hub" },
                { location: "Lahore", properties: "150+ Properties", highlight: "Cultural Center" },
                { location: "Multan", properties: "30+ Properties", highlight: "Emerging Market" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-smooth">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-luxury-gold" />
                    <div>
                      <div className="font-medium text-white">{item.location}</div>
                      <div className="text-xs text-white/70">{item.highlight}</div>
                    </div>
                  </div>
                  <div className="text-sm text-luxury-gold font-medium">{item.properties}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;