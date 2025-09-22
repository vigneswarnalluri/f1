import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/Fasttracks-Car-Care-Thar-Upgradation.jpg.jpeg';

const Contact = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setContactForm({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: [
        'Jubilee Hills, Hyderabad',
        'Telangana, India - 500033'
      ],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 9000 000 000',
        '+91 8000 000 000'
      ],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@fasttrackscarcare.in',
        'support@fasttrackscarcare.in'
      ],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Mon - Sat: 9:00 AM - 8:00 PM',
        'Sunday: 10:00 AM - 6:00 PM'
      ],
      action: 'View Schedule'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Youtube, name: 'YouTube', url: '#' }
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
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in text-white">
            Contact Our
            <span className="block bg-luxury-gradient bg-clip-text text-transparent">
              Expert Team
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
            Ready to give your luxury vehicle the premium care it deserves? 
            Get in touch with our team of automotive experts today.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="text-center luxury-shadow hover:scale-105 transition-luxury animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4 glow-shadow">
                    <info.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-playfair">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">{detail}</p>
                  ))}
                  <Button 
                    variant="outline" 
                    className="mt-4 transition-luxury hover:scale-105"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="luxury-shadow">
                <CardHeader>
                  <CardTitle className="text-3xl font-playfair">Send us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Have questions about our services? We'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-luxury-gradient text-primary-foreground hover:scale-105 transition-luxury luxury-shadow"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Google Map */}
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

              {/* Social Media */}
              <Card className="luxury-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">Follow Us</CardTitle>
                  <CardDescription>
                    Stay updated with our latest services and automotive tips
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center hover:scale-110 transition-luxury glow-shadow"
                        aria-label={social.name}
                      >
                        <social.icon className="h-6 w-6 text-primary-foreground" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-2">Why Choose Fasttrack Car Care?</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 6+ years of premium automotive experience</li>
                      <li>• 16+ certified technicians</li>
                      <li>• 16,864+ satisfied customers</li>
                      <li>• State-of-the-art facility in Jubilee Hills</li>
                      <li>• Comprehensive warranty on all services</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Take a Virtual Tour
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experience our premium facility from the comfort of your home with our 
            interactive 360° virtual tour.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-playfair font-semibold">
                Explore Our Premium Facility
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">
                    State-of-the-art equipment for Paint Protection Film application
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">
                    Climate-controlled environment for Ceramic Coating services
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">
                    Premium alloy wheels showroom with 500+ options
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">
                    Comfortable customer lounge and consultation areas
                  </p>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-luxury-gradient text-primary-foreground hover:scale-105 transition-luxury luxury-shadow"
              >
                Start Virtual Tour
              </Button>
            </div>
            
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4 glow-shadow">
                <span className="text-4xl">360°</span>
              </div>
              <p className="text-lg font-medium mb-2">Interactive VR Experience</p>
              <p className="text-muted-foreground">
                Navigate through our facility using arrow keys or touch controls
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;