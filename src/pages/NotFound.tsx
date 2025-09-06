import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-elegant pt-24">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="mb-4 text-6xl font-elegant font-bold text-bordeaux">404</h1>
        <p className="mb-6 text-xl text-charcoal/80 font-body">Oups ! Page introuvable</p>
        <p className="mb-8 text-muted-foreground font-body">
          La page que vous recherchez semble s'être égarée dans les ruelles du Quartier Latin.
        </p>
        <Button 
          asChild 
          className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
        >
          <Link to="/">Retourner à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
