
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover:bg-secondary"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-smooth" />
      ) : (
        <Sun className="h-5 w-5 transition-smooth" />
      )}
    </button>
  );
};

export default ThemeToggle;
