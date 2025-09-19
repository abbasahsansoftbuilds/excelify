import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold">Excel Marketing</span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Your trusted partner in real estate. We provide comprehensive property solutions
                with expertise in buying, selling, and development across Pakistan.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: "Projects", href: "/projects" },
                  { label: "Company Profile", href: "/company-profile" },
                  { label: "Contact", href: "/contact" },
                  { label: "About Us", href: "/company-profile" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-background/80 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <div className="space-y-2">
                {[
                  "Property Investment",
                  "Real Estate Consultation", 
                  "Legal Documentation",
                  "Site Visits & Tours",
                  "Market Analysis",
                ].map((service) => (
                  <div key={service} className="text-background/80 text-sm">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Connected</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-background/80">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:excelmarketingpk@gmail.com" className="hover:text-background transition-colors">
                    excelmarketingpk@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-sm text-background/80">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>Pakistan</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="space-y-2">
                <h4 className="font-medium">Property Updates</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Your email"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                  />
                  <Button variant="secondary" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Footer Bottom */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              © 2024 Excel Marketing Pvt Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
