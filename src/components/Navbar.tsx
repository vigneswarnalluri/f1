import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import logoImage from '@/assets/FT-O-LOGO.png';
import logoText from '@/assets/fasttracks-logo-lt-600x42.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Alloys', path: '/alloys' },
    { name: 'Contact Us', path: '/contact' },
    ...(user ? [{ name: 'Service Enquiry', path: '/service-enquiry' }] : []),
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border luxury-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-smooth hover:scale-105">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="Fasttrack Car Care Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <img 
                src={logoText} 
                alt="Fasttrack Car Care" 
                className="h-4 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-luxury font-medium ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground luxury-shadow'
                    : 'text-foreground hover:bg-secondary hover:text-secondary-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.name}
                </span>
                <Button 
                  variant="outline" 
                  onClick={logout}
                  className="transition-luxury"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  asChild
                  className="transition-luxury"
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button 
                  asChild
                  className="bg-luxury-gradient text-primary-foreground luxury-shadow transition-luxury hover:scale-105"
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`p-3 rounded-lg transition-luxury text-lg ${
                      isActive(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="border-t border-border pt-4 mt-6">
                  {user ? (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Welcome, {user.name}
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="w-full"
                      >
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Button 
                        variant="outline" 
                        asChild
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button 
                        asChild
                        className="w-full bg-luxury-gradient text-primary-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link to="/signup">Sign Up</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;