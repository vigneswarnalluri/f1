import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, User, Mail, Phone, Car, Clock, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const ServiceEnquiry = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    customerName: user?.name || '',
    email: user?.email || '',
    mobile: '',
    carBrand: '',
    carModel: '',
    preferredService: '',
    timeSlot: '',
    description: ''
  });

  const carBrands = [
    'Mercedes-Benz', 'BMW', 'Ferrari', 'Porsche', 'Audi', 'Bentley', 
    'Lamborghini', 'Rolls Royce', 'Maserati', 'Jaguar', 'Land Rover', 
    'Aston Martin', 'Tesla', 'Lexus', 'Volvo', 'Other'
  ];

  const services = [
    'Paint Protection Film (PPF)',
    'Ceramic Coating',
    'Skin Restoration System (SRS)',
    'Hydro Dipping',
    'Deep Interior Cleaning',
    'Custom Audio Setup',
    'Car Wash & Detailing',
    'Alloy Wheel Installation',
    'Custom Consultation'
  ];

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.customerName || !formData.email || !formData.mobile || 
        !formData.carBrand || !formData.carModel || !formData.preferredService || !date) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Service Enquiry Submitted!",
      description: "Our team will contact you within 2 hours to confirm your appointment.",
    });
    
    // Reset form
    setFormData({
      customerName: user?.name || '',
      email: user?.email || '',
      mobile: '',
      carBrand: '',
      carModel: '',
      preferredService: '',
      timeSlot: '',
      description: ''
    });
    setDate(undefined);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="text-primary font-medium px-4 py-2 mb-6">
            Premium Service Booking
          </Badge>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in">
            Service
            <span className="block bg-luxury-gradient bg-clip-text text-transparent">
              Enquiry Form
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
            Welcome {user?.name}! Please provide detailed information about your vehicle 
            and preferred service to help us serve you better.
          </p>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="luxury-shadow animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair">Detailed Service Request</CardTitle>
              <CardDescription className="text-lg">
                Help us understand your needs to provide the best possible service experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Customer Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    Customer Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Customer Name *</label>
                      <Input
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mobile Number *</label>
                      <Input
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="+91 9000000000"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <Car className="h-5 w-5 mr-2 text-primary" />
                    Vehicle Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Car Brand *</label>
                      <Select value={formData.carBrand} onValueChange={(value) => setFormData({ ...formData, carBrand: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your car brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {carBrands.map(brand => (
                            <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Car Model *</label>
                      <Input
                        value={formData.carModel}
                        onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                        placeholder="e.g., S-Class, M3, 911 Turbo"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Service Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Service Requirements
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Service *</label>
                    <Select value={formData.preferredService} onValueChange={(value) => setFormData({ ...formData, preferredService: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the service you need" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Appointment Scheduling */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Preferred Schedule
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="pointer-events-auto"
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Time Slot</label>
                      <Select value={formData.timeSlot} onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map(slot => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Additional Information</h3>
                  <div>
                    <label className="block text-sm font-medium mb-2">Detailed Request Description</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please describe any specific requirements, concerns about your vehicle, or additional services you might need..."
                      rows={5}
                    />
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">What happens next?</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Our service advisor will contact you within 2 hours</p>
                    <p>• We'll confirm your appointment and provide a detailed quote</p>
                    <p>• You'll receive service preparation instructions</p>
                    <p>• We'll send appointment reminders and updates</p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-luxury-gradient text-primary-foreground hover:scale-105 transition-luxury luxury-shadow"
                >
                  Submit Service Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ServiceEnquiry;