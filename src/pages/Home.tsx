import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Shield, Star, Users, Award, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/fasttracks-car-care-3-1024x524.png';

// Import brand logos
import ferrariLogo from '@/assets/brands/ferrari-logo.png';
import fordLogo from '@/assets/brands/ford-logo.png';
import jaguarLogo from '@/assets/brands/jaguar-logo.png';
import kiaLogo from '@/assets/brands/kia-logo.png';
import landRoverLogo from '@/assets/brands/land-rover-logo.png';
import maseratiLogo from '@/assets/brands/maserati-logo.png';
import maybachLogo from '@/assets/brands/maybach-logo.png';
import mercedesLogo from '@/assets/brands/mercedes-logo.png';
import mgLogo from '@/assets/brands/mg-logo.png';

const Home = () => {
  const { toast } = useToast();
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    mobile: '',
    description: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!bookingForm.name || !bookingForm.email || !bookingForm.mobile) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Appointment Booked!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    
    // Reset form
    setBookingForm({ name: '', email: '', mobile: '', description: '' });
  };

  const stats = [
    { icon: Award, label: 'Years Experience', value: '6+' },
    { icon: Users, label: 'Expert Technicians', value: '16+' },
    { icon: Shield, label: 'Car Accessories', value: '505+' },
    { icon: Star, label: 'Happy Customers', value: '16,864+' }
  ];

  const brandLogos = [
    { name: 'Ferrari', logo: ferrariLogo },
    { name: 'Ford', logo: fordLogo },
    { name: 'Jaguar', logo: jaguarLogo },
    { name: 'Kia', logo: kiaLogo },
    { name: 'Land Rover', logo: landRoverLogo },
    { name: 'Maserati', logo: maseratiLogo },
    { name: 'Maybach', logo: maybachLogo },
    { name: 'Mercedes', logo: mercedesLogo },
    { name: 'MG', logo: mgLogo }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <div className="space-y-4 animate-fade-in">
            <Badge variant="secondary" className="text-primary font-medium px-4 py-2">
              Premium Car Care Services
            </Badge>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight">
              Premium Care for
              <span className="block bg-luxury-gradient bg-clip-text text-transparent">
                Premium Cars
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Experience world-class automotive care with our exclusive services for luxury vehicles. 
              Over 6 years of excellence in Hyderabad.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-left">
            <Button 
              size="lg" 
              className="bg-luxury-gradient text-primary-foreground px-8 py-4 text-lg luxury-shadow hover:scale-105 transition-luxury"
            >
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg transition-luxury"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto glow-shadow">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-playfair font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Trusted by Premium Brands
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We specialize in caring for the world's most prestigious automotive brands
          </p>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {brandLogos.map((brand, index) => (
                <CarouselItem key={brand.name} className="basis-1/4">
                  <div className="h-48 flex items-center justify-center animate-fade-in"
                       style={{ animationDelay: `${index * 0.05}s` }}>
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-32 max-w-48 object-contain opacity-70 hover:opacity-100 hover:scale-105 transition-smooth"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Book Your Appointment
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule your premium car care service today
            </p>
          </div>
          
          <Card className="luxury-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair">Schedule Service</CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                    <Input
                      value={bookingForm.mobile}
                      onChange={(e) => setBookingForm({ ...bookingForm, mobile: e.target.value })}
                      placeholder="+91 9000000000"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Description</label>
                  <Textarea
                    value={bookingForm.description}
                    onChange={(e) => setBookingForm({ ...bookingForm, description: e.target.value })}
                    placeholder="Tell us about your car and the services you need..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-luxury-gradient text-primary-foreground luxury-shadow hover:scale-105 transition-luxury"
                >
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">
                Visit Our Premium Facility
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Located in the heart of Jubilee Hills, Hyderabad, our state-of-the-art facility 
                offers a premium environment for your luxury vehicle care needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 9000 000 000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@fasttrackscarcare.in</span>
                </div>
              </div>
              
              <Button 
                variant="outline"
                size="lg"
                className="transition-luxury hover:scale-105"
              >
                Get Directions
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden luxury-shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5491!2d78.4102297!3d17.4238181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI1LjciTiA3OMKwMjQnMzYuOCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;