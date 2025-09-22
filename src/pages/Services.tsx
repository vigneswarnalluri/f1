import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Sparkles, Wrench, Droplets, Car, Volume2 } from 'lucide-react';
import servicesHero from '@/assets/istockphoto-1304619401-170667a.jpg.jpeg';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Paint Protection Film (PPF)',
      description: 'One of the greatest methods to keep your car looking like it did when it left the showroom. Our nearly invisible coating shields exposed parts including front bumpers, hoods, side mirrors, door handle cavities, door edges, rocker panels, and rear fender panels.',
      features: ['Self-healing properties', 'UV protection', 'Maintains resale value', 'Crystal clear finish'],
      duration: '1-2 days',
      price: 'Starting from ₹25,000'
    },
    {
      icon: Sparkles,
      title: 'Ceramic Coating',
      description: 'A sturdy protective layer that shields your paintwork from UV rays and environmental contaminants. Creates a very strong shell on the surface of the car, making it simple to clean without worrying about scratches.',
      features: ['Hydrophobic properties', 'Enhanced gloss', 'Easy maintenance', 'Long-lasting protection'],
      duration: '6-8 hours',
      price: 'Starting from ₹15,000'
    },
    {
      icon: Wrench,
      title: 'Skin Restoration System (SRS)',
      description: 'A five-step process to remove surface-level damage such as scratches, swirl marks, clear coat haze, and scratches that have penetrated painted surfaces. Returns the surface to its factory-delivered luster.',
      features: ['Scratch removal', 'Paint correction', 'Swirl mark elimination', 'Professional finish'],
      duration: '4-6 hours',
      price: 'Starting from ₹8,000'
    },
    {
      icon: Droplets,
      title: 'Hydro Dipping',
      description: 'A unique and specialized process that can be applied to most car parts. Add color and design to your car parts with a wide range of possibilities in terms of color and design patterns.',
      features: ['Custom patterns', 'Durable finish', 'Unique designs', 'Professional application'],
      duration: '2-3 days',
      price: 'Starting from ₹5,000'
    },
    {
      icon: Car,
      title: 'Deep Interior Cleaning',
      description: 'Comprehensive interior detailing service that removes dirt, stains, and odors from every surface. Professional cleaning of seats, carpets, dashboard, and all interior components.',
      features: ['Steam cleaning', 'Leather conditioning', 'Odor elimination', 'UV protection'],
      duration: '3-4 hours',
      price: 'Starting from ₹3,000'
    },
    {
      icon: Volume2,
      title: 'Custom Audio Setup',
      description: 'Take things a step further and create something that a true audiophile would be proud of. Professional installation of premium audio systems tailored to your preferences.',
      features: ['Premium components', 'Custom installation', 'Sound optimization', 'Professional wiring'],
      duration: '1-2 days',
      price: 'Starting from ₹20,000'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We assess your vehicle and discuss your specific needs and preferences.'
    },
    {
      step: '02',
      title: 'Preparation', 
      description: 'Your vehicle is thoroughly cleaned and prepared for the selected service.'
    },
    {
      step: '03',
      title: 'Service Application',
      description: 'Our expert technicians perform the service with precision and attention to detail.'
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'We conduct a comprehensive quality inspection to ensure perfect results.'
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Your vehicle is returned to you with care instructions and warranty information.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHero})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="text-primary font-medium px-4 py-2 mb-6">
            Premium Services
          </Badge>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6 animate-fade-in">
            Exceptional Care for
            <span className="block bg-luxury-gradient bg-clip-text text-transparent">
              Exceptional Cars
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
            Discover our comprehensive range of premium automotive services, 
            designed to protect, enhance, and customize your luxury vehicle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each service is performed by certified technicians using the finest 
              products and techniques in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="luxury-shadow hover:scale-105 transition-luxury animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-luxury-gradient rounded-lg flex items-center justify-center mb-4 glow-shadow">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-semibold text-primary">{service.price}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-luxury-gradient text-primary-foreground hover:scale-105 transition-luxury">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a meticulous process to ensure every service meets our 
              exacting standards of quality and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto glow-shadow">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.step}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-border" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss the best protection 
            and enhancement solutions for your luxury vehicle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-luxury-gradient text-primary-foreground px-8 py-4 text-lg luxury-shadow hover:scale-105 transition-luxury"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg transition-luxury hover:scale-105"
            >
              Call Now: +91 9000 000 000
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;