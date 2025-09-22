import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Users, Star, Wrench, Car } from 'lucide-react';
import heroImage from '@/assets/Porsche-SRS-Done-At-Fasttracks-Car-Care.jpeg';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Premium Protection',
      description: 'Advanced Paint Protection Film (PPF) and Ceramic Coating services to keep your luxury car pristine.'
    },
    {
      icon: Award,
      title: 'Expert Craftsmanship', 
      description: 'Over 6 years of experience with a team of 16+ skilled technicians dedicated to excellence.'
    },
    {
      icon: Users,
      title: 'Trusted Service',
      description: 'Proudly serving 16,864+ satisfied customers with premium automotive care.'
    },
    {
      icon: Wrench,
      title: 'Comprehensive Care',
      description: 'From detailing to custom audio setups, we offer complete automotive solutions.'
    }
  ];

  const services = [
    'Paint Protection Film (PPF)',
    'Ceramic Coating',
    'Skin Restoration System (SRS)',
    'Hydro Dipping',
    'Deep Interior Cleaning',
    'Custom Audio Setup',
    'Car Washing & Detailing',
    'Aftermarket Accessories'
  ];

  const testimonials = [
    {
      name: 'Rushi Manoj',
      car: 'Innova Crysta',
      review: 'I recently visited this place for some car related things. It was recommended to me by one of my friends. I really liked their service and the staff is also very polite and humble. Major customer satisfaction providers. Their work is top notch. One will always walk out with a smile.'
    },
    {
      name: 'Sai Mithra Reddy',
      car: 'Audi A6',
      review: 'Best car accessories store near Jubilee Hills, Hyderabad. Organized & busy team can feel the warmth. Great ambiance & hospitality. Have good collection and quality car accessories and alloys.'
    },
    {
      name: 'Pranay',
      car: 'Range Rover',
      review: 'One of the biggest workshops in the twin cities. Every car accessory is available at Fasttracks Car Care. Total professionalism. Cordial. Every one knows what they\'re talking about. Very meticulous and patient with their work.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="text-primary font-medium px-4 py-2 mb-6">
            About Fasttrack Car Care
          </Badge>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in text-white">
            Premium Car Care
            <span className="block bg-luxury-gradient bg-clip-text text-transparent">
              Excellence Since 2018
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-slide-in-left">
            Fasttrack Car Care is a one-stop destination for all your luxury car care needs. 
            We specialize in aftermarket car products, accessories, and modifications along with premium 
            detailing services for discerning automotive enthusiasts.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over two decades of combined experience in the automotive industry, 
                  Fasttrack Car Care was born from a passion for automotive excellence and 
                  a commitment to providing services that exceed our customers' expectations.
                </p>
                <p>
                  We understand that your luxury vehicle is more than just transportation – 
                  it's a reflection of your success, taste, and attention to detail. That's why 
                  we've dedicated ourselves to mastering the most advanced techniques in 
                  automotive care and protection.
                </p>
                <p>
                  From Paint Protection Film (PPF) and Ceramic Coating to custom modifications 
                  and audio systems, we offer comprehensive solutions to keep your vehicle 
                  looking and performing at its absolute best.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="p-6 luxury-shadow hover:scale-105 transition-luxury"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0 space-y-4">
                    <div className="w-12 h-12 bg-luxury-gradient rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of premium automotive services designed 
              to protect, enhance, and customize your luxury vehicle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service}
                className="bg-card rounded-lg p-6 text-center hover:scale-105 transition-luxury luxury-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Car className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-medium text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-16">
            Our Achievements
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 animate-fade-in">
              <div className="text-5xl md:text-6xl font-playfair font-bold text-primary">6+</div>
              <p className="text-lg font-medium">Years Experience</p>
              <p className="text-muted-foreground text-sm">
                Serving Hyderabad's automotive community
              </p>
            </div>
            
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-playfair font-bold text-primary">16+</div>
              <p className="text-lg font-medium">Expert Technicians</p>
              <p className="text-muted-foreground text-sm">
                Skilled professionals dedicated to excellence
              </p>
            </div>
            
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-playfair font-bold text-primary">505+</div>
              <p className="text-lg font-medium">Car Accessories</p>
              <p className="text-muted-foreground text-sm">
                Premium products and modifications available
              </p>
            </div>
            
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-playfair font-bold text-primary">16,864+</div>
              <p className="text-lg font-medium">Happy Customers</p>
              <p className="text-muted-foreground text-sm">
                Satisfied clients across luxury car brands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="luxury-shadow hover:scale-105 transition-luxury animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.car}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;