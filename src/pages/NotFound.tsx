import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <FloatingNav />
      
      <div className="flex-1 flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
          <Link 
            to="/" 
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-[10px] font-medium hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
