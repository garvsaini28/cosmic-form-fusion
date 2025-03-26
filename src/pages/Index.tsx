
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 relative">
      {/* Crypto Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background/80 to-background/60">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/a15c0ba1-c912-4d7b-a41d-bdddc05eede5.png')] bg-cover bg-center opacity-70 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>
      
      {/* Theme Toggle Button (Top Right) */}
      <div className="fixed top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      
      <div className="max-w-3xl w-full text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gradient-cyber">
          Welcome to CryptoMart
        </h1>
        
        <p className="text-xl text-cyan-glow max-w-xl mx-auto font-light">
          Sign up as a new user or sign in to your existing account.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button
            onClick={() => navigate("/signup")}
            className="px-8 py-6 rounded-xl bg-primary/90 text-primary-foreground font-medium text-lg
            hover:bg-primary/80 hover:scale-105 transition-smooth focus:outline-none focus:ring-2 
            focus:ring-primary/20 focus:ring-offset-2 shadow-glow-cyan"
          >
            Sign Up
          </Button>
          
          <Button 
            onClick={() => navigate("/signup")}
            className="px-8 py-6 rounded-xl border border-cyan-500/30 bg-background/20 backdrop-blur-sm
            text-lg font-medium text-cyan-50 hover:bg-cyan-900/20 hover:scale-105 transition-smooth 
            focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
