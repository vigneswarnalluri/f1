import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Zap } from 'lucide-react';
import alloysHero from '@/assets/alloys-hero.jpg';

const Alloys = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const alloyWheels = [
    {
      id: 1,
      name: 'Mercedes AMG Style',
      brand: 'Mercedes',
      size: '19"',
      price: '₹45,000',
      originalPrice: '₹52,000',
      image: 'https://images.unsplash.com/photo-1558618666-fbd1c03c3c20?w=400&auto=format&fit=crop&q=60',
      features: ['Forged Construction', 'Lightweight', 'OEM Style'],
      description: 'Premium AMG-style alloy wheels with authentic design and superior finish.'
    },
    {
      id: 2,
      name: 'BMW M Performance',
      brand: 'BMW', 
      size: '20"',
      price: '₹55,000',
      originalPrice: '₹65,000',
      image: 'https://images.unsplash.com/photo-1567787138628-91dea5de0c1e?w=400&auto=format&fit=crop&q=60',
      features: ['M-Style Design', 'Carbon Fiber Accents', 'Performance Grade'],
      description: 'Authentic M Performance wheels for the ultimate driving experience.'
    },
    {
      id: 3,
      name: 'Audi RS Style',
      brand: 'Audi',
      size: '18"',
      price: '₹42,000',
      originalPrice: '₹48,000',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&auto=format&fit=crop&q=60',
      features: ['RS Design', 'Gloss Black Finish', 'Precision Engineered'],
      description: 'Sporty RS-style wheels that combine performance with elegance.'
    },
    {
      id: 4,
      name: 'Ferrari Racing Style',
      brand: 'Ferrari',
      size: '21"',
      price: '₹85,000',
      originalPrice: '₹95,000',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&auto=format&fit=crop&q=60',
      features: ['Racing Heritage', 'Ultra-Lightweight', 'Track Tested'],
      description: 'Professional-grade racing wheels inspired by Ferrari\'s motorsport legacy.'
    },
    {
      id: 5,
      name: 'Porsche Classic',
      brand: 'Porsche',
      size: '19"',
      price: '₹62,000',
      originalPrice: '₹72,000',
      image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400&auto=format&fit=crop&q=60',
      features: ['Classic Design', 'Premium Finish', 'Iconic Style'],
      description: 'Timeless Porsche design with modern engineering and premium materials.'
    },
    {
      id: 6,
      name: 'Lamborghini Supercar',
      brand: 'Lamborghini',
      size: '20"',
      price: '₹78,000',
      originalPrice: '₹88,000',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&auto=format&fit=crop&q=60',
      features: ['Supercar Grade', 'Aggressive Design', 'Track Ready'],
      description: 'Aggressive supercar styling for the ultimate performance statement.'
    }
  ];

  const brands = ['all', 'Mercedes', 'BMW', 'Audi', 'Ferrari', 'Porsche', 'Lamborghini'];
  const sizes = ['all', '18"', '19"', '20"', '21"'];

  const filteredWheels = alloyWheels.filter(wheel => {
    const matchesSearch = wheel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         wheel.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || wheel.brand === selectedBrand;
    const matchesSize = selectedSize === 'all' || wheel.size === selectedSize;
    
    return matchesSearch && matchesBrand && matchesSize;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${alloysHero})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="text-primary font-medium px-4 py-2 mb-6">
            Premium Alloy Wheels
          </Badge>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6 animate-fade-in">
            Transform Your Ride with
            <span className="block bg-luxury-gradient bg-clip-text text-transparent">
              Premium Alloys
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
            Discover our exclusive collection of premium alloy wheels designed for 
            luxury vehicles. Each wheel combines style, performance, and quality.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search alloy wheels..."
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-40 h-12">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>
                      {brand === 'all' ? 'All Brands' : brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-32 h-12">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map(size => (
                    <SelectItem key={size} value={size}>
                      {size === 'all' ? 'All Sizes' : size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Alloys Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Premium Alloy Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {filteredWheels.length} premium alloy wheels designed for discerning automotive enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWheels.map((wheel, index) => (
              <Card 
                key={wheel.id}
                className="group luxury-shadow hover:scale-105 transition-luxury animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={wheel.image} 
                    alt={wheel.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-luxury"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {wheel.size}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-luxury" />
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-playfair">{wheel.name}</CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {wheel.brand}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{wheel.price}</p>
                      <p className="text-sm text-muted-foreground line-through">
                        {wheel.originalPrice}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {wheel.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {wheel.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-luxury-gradient text-primary-foreground hover:scale-105 transition-luxury"
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      Quick Order
                    </Button>
                    <Button variant="outline" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredWheels.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No wheels found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all available wheels.
              </p>
              <Button 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBrand('all');
                  setSelectedSize('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Why Choose Our Alloys?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto glow-shadow">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                All wheels are sourced from top manufacturers and undergo rigorous quality testing 
                to ensure perfect fit and long-lasting performance.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto glow-shadow">
                <Search className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Expert Installation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our certified technicians ensure perfect installation with proper balancing 
                and alignment for optimal performance and safety.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto glow-shadow">
                <Filter className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Warranty Coverage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every wheel comes with comprehensive warranty coverage and 
                ongoing support for peace of mind with your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Upgrade Your Wheels?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss the perfect alloy wheels for your luxury vehicle. 
            Professional installation and warranty included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-luxury-gradient text-primary-foreground px-8 py-4 text-lg luxury-shadow hover:scale-105 transition-luxury"
            >
              Get Quote Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg transition-luxury hover:scale-105"
            >
              Visit Showroom
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alloys;