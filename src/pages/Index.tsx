
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      {/* Theme Toggle Button (Top Right) */}
      <div className="fixed top-6 right-6">
        <ThemeToggle />
      </div>
      
      <div className="max-w-3xl w-full text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to CryptoMart
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          Join hundreds of innovators and build amazing projects in our upcoming hackathon.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium 
            hover:bg-primary/90 transition-smooth focus:outline-none focus:ring-2 
            focus:ring-primary/20 focus:ring-offset-2"
          >
            Sign Up Now
          </button>
          
          <button 
            onClick={() => navigate("/signup")}
            className="px-8 py-3 rounded-xl border border-input bg-background 
            hover:bg-secondary transition-smooth focus:outline-none focus:ring-2 
            focus:ring-primary/20 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
