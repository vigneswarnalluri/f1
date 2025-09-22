import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-playfair font-bold bg-luxury-gradient bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring our premium car care services.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-luxury-gradient text-primary-foreground rounded-lg font-medium hover:scale-105 transition-luxury luxury-shadow"
          >
            Return to Home
          </Link>
          <Link 
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-luxury"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
