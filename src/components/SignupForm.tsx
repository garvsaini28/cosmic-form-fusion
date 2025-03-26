
import { useState } from "react";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Eye, EyeOff, ArrowRight, User, Mail, Lock, LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const { formData, errors, touched, handleChange, handleBlur, handleSubmit } = useFormValidation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (e: React.FormEvent) => {
    const isValid = handleSubmit(e);
    
    if (isValid) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        toast({
          title: "Account created!",
          description: "You've successfully signed up.",
        });
        
        // Would typically redirect user or clear form here
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full space-y-6 animate-fade-in">
      <div className="space-y-4">
        {/* Full Name Field */}
        <div className="space-y-2">
          <div className="relative">
            <label 
              htmlFor="fullName" 
              className={`absolute -top-2.5 left-3 px-1 text-xs transition-smooth
              ${formData.fullName ? 'text-primary' : 'text-muted-foreground'}
              bg-background`}
            >
              Full Name
            </label>
            <div className="relative">
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                className={`w-full h-14 px-4 pl-10 rounded-xl border-2 bg-background
                transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-0
                ${touched.fullName && errors.fullName 
                  ? 'border-destructive focus:ring-destructive/30' 
                  : formData.fullName 
                    ? 'border-primary focus:ring-primary/20' 
                    : 'border-input focus:ring-primary/20'}`
                }
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>
          {touched.fullName && errors.fullName && (
            <p className="text-destructive text-sm pl-2 animate-fade-in">{errors.fullName}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <div className="relative">
            <label 
              htmlFor="email" 
              className={`absolute -top-2.5 left-3 px-1 text-xs transition-smooth
              ${formData.email ? 'text-primary' : 'text-muted-foreground'}
              bg-background`}
            >
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                className={`w-full h-14 px-4 pl-10 rounded-xl border-2 bg-background
                transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-0
                ${touched.email && errors.email 
                  ? 'border-destructive focus:ring-destructive/30' 
                  : formData.email 
                    ? 'border-primary focus:ring-primary/20' 
                    : 'border-input focus:ring-primary/20'}`
                }
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>
          {touched.email && errors.email && (
            <p className="text-destructive text-sm pl-2 animate-fade-in">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="relative">
            <label 
              htmlFor="password" 
              className={`absolute -top-2.5 left-3 px-1 text-xs transition-smooth
              ${formData.password ? 'text-primary' : 'text-muted-foreground'}
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
                ${touched.password && errors.password 
                  ? 'border-destructive focus:ring-destructive/30' 
                  : formData.password 
                    ? 'border-primary focus:ring-primary/20' 
                    : 'border-input focus:ring-primary/20'}`
                }
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
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
          {touched.password && errors.password && (
            <p className="text-destructive text-sm pl-2 animate-fade-in">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="space-y-2">
          <div className="relative">
            <label 
              htmlFor="confirmPassword" 
              className={`absolute -top-2.5 left-3 px-1 text-xs transition-smooth
              ${formData.confirmPassword ? 'text-primary' : 'text-muted-foreground'}
              bg-background`}
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full h-14 px-4 pl-10 rounded-xl border-2 bg-background
                transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-0
                ${touched.confirmPassword && errors.confirmPassword 
                  ? 'border-destructive focus:ring-destructive/30' 
                  : formData.confirmPassword 
                    ? 'border-primary focus:ring-primary/20' 
                    : 'border-input focus:ring-primary/20'}`
                }
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="text-destructive text-sm pl-2 animate-fade-in">{errors.confirmPassword}</p>
          )}
        </div>
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
            <span>Creating account...</span>
          </>
        ) : (
          <>
            <span>Create Account</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Login Link */}
      <div className="text-center text-sm">
        <span className="text-muted-foreground">Already have an account?</span>{" "}
        <a href="/login" className="text-primary hover:underline transition-smooth">
          Log in
        </a>
      </div>
    </form>
  );
};

export default SignupForm;
