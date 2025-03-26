
import SignInForm from "@/components/SignInForm";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

const SignIn = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden">
      {/* Background Design - Subtle patterns for light/dark mode */}
      <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
        <div className="absolute w-full h-full">
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-70"
            style={{ transform: "translate3d(0, 0, 0)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-70"
            style={{ transform: "translate3d(0, 0, 0)" }}
          />
        </div>
      </div>

      {/* Theme Toggle Button (Top Right) */}
      <div className="fixed top-6 right-6">
        <ThemeToggle />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-md">
        {/* Card Container with Glass Effect */}
        <div className="glass-card p-8 sm:p-10 animate-scale-in">
          {/* Logo and Heading */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-soft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-primary"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to access your account
            </p>
          </div>

          {/* SignIn Form Component */}
          <SignInForm />
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CryptoMart. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
