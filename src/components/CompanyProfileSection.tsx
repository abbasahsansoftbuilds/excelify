import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyProfileSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Leadership
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Excel Marketing Pvt Ltd
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "WE DON'T JUST SELL — WE CONNECT, CREATE, AND CONVERT POTENTIAL INTO PERFORMANCE."
          </p>
        </div>

        {/* CEO Profile Preview */}
        <Card className="mb-12 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              {/* Placeholder for CEO image */}
              <div className="h-72 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">CEO Photo Coming Soon</span>
              </div>
            </div>
            <CardContent className="md:w-2/3 p-8">
              <Badge className="mb-4 bg-luxury-gold text-foreground">CEO</Badge>
              <h3 className="text-2xl font-bold mb-4">Waheed ur Rehman Farooqui</h3>
              <div className="prose text-muted-foreground mb-6">
                <p>
                  Waheed ur Rehman Farooqui, CEO of Excel Marketing Pvt Ltd, leads a specialized team in property management, sales, marketing, and leasing. The company is dedicated to exceptional results, seamless transactions, and building long-term relationships with property owners, tenants, and buyers.
                </p>
              </div>
              <Link to="/company-profile">
                <Button variant="outline" className="group">
                  View Full Profile
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </div>
        </Card>

        {/* Leadership Preview */}
        <div className="text-center">
          <Link to="/company-profile">
            <Button variant="hero" size="lg" className="group">
              Meet Our Team
              <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileSection;
