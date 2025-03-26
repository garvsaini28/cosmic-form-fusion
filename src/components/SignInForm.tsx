
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, Mail, Lock, LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call to verify credentials
      // For demo purposes, we'll simulate credential checking
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This is dummy validation logic - in a real app, you would check against a database
      // The email "user@example.com" with password "Password123" will be considered valid
      if (email === "user@example.com" && password === "Password123") {
        toast({
          title: "Signed in successfully!",
          description: "Welcome back to CryptoMart.",
        });
        
        // Redirect to a protected page (e.g., dashboard)
        navigate("/");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 animate-fade-in">
      {error && (
        <Alert variant="destructive" className="animate-shake">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4">
        {/* Email Field */}
        <div className="space-y-2">
          <div className="relative">
            <label 
              htmlFor="email" 
              className={`absolute -top-2.5 left-3 px-1 text-xs transition-smooth
              ${email ? 'text-primary' : 'text-muted-foreground'}
              bg-background`}
            >
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                className={`w-full h-14 px-4 pl-10 rounded-xl border-2 bg-background
                transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-0
                ${error ? 'border-destructive focus:ring-destructive/30' : 
                  email ? 'border-primary focus:ring-primary/20' : 
                  'border-input focus:ring-primary/20'}`
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="relative">
            <label 
              htmlFor="password" 
              className={`absolute -top-2.5 left-3 px-1 text-xs transition-smooth
              ${password ? 'text-primary' : 'text-muted-foreground'}
              bg-background`}
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full h-14 px-4 pl-10 rounded-xl border-2 bg-background
                transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-0
                ${error ? 'border-destructive focus:ring-destructive/30' : 
                  password ? 'border-primary focus:ring-primary/20' : 
                  'border-input focus:ring-primary/20'}`
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Link */}
      <div className="text-right">
        <a href="#" className="text-sm text-primary hover:underline transition-smooth">
          Forgot password?
        </a>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 
        text-primary-foreground font-medium rounded-xl transition-smooth focus:outline-none 
        focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="w-5 h-5 animate-spin" />
            <span>Signing in...</span>
          </>
        ) : (
          <>
            <span>Sign In</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Sign Up Link */}
      <div className="text-center text-sm">
        <span className="text-muted-foreground">Don't have an account?</span>{" "}
        <a href="/signup" className="text-primary hover:underline transition-smooth">
          Sign up
        </a>
      </div>
    </form>
  );
};

export default SignInForm;
