import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/download.png" 
                alt="Fasttrack Car Care Services Logo" 
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-xl font-playfair font-bold">Fasttrack</h3>
                <p className="text-sm text-muted-foreground">Car Care Services</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium car care services for luxury vehicles. Over 6 years of experience 
              in providing world-class automotive care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/about" 
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Our Services
              </Link>
              <Link 
                to="/alloys" 
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Alloys
              </Link>
              <Link 
                to="/contact" 
                className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Paint Protection Film (PPF)</p>
              <p className="text-muted-foreground text-sm">Ceramic Coating</p>
              <p className="text-muted-foreground text-sm">SRS Treatment</p>
              <p className="text-muted-foreground text-sm">Hydro Dipping</p>
              <p className="text-muted-foreground text-sm">Deep Interior Cleaning</p>
              <p className="text-muted-foreground text-sm">Custom Audio Setup</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Jubilee Hills, Hyderabad<br />
                  Telangana, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">+91 9000 000 000</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">info@fasttrackscarcare.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Fasttrack Car Care Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;