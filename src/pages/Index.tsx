
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 relative">
      {/* Crypto Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background/90 to-background/70">
        <div className="absolute inset-0 bg-[url('/crypto-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      {/* Theme Toggle Button (Top Right) */}
      <div className="fixed top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      
      <div className="max-w-3xl w-full text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to CryptoMart
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          Sign up as a new user or sign in to your existing account.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium 
            hover:bg-primary/90 transition-smooth focus:outline-none focus:ring-2 
            focus:ring-primary/20 focus:ring-offset-2"
          >
            Sign Up
          </button>
          
          <button 
            onClick={() => navigate("/signup")}
            className="px-8 py-3 rounded-xl border border-input bg-background 
            hover:bg-secondary transition-smooth focus:outline-none focus:ring-2 
            focus:ring-primary/20 focus:ring-offset-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
