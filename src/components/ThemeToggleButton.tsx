import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center fixed bottom-6 right-6   dark:text-white rounded-full p-3 shadow-lg z-50 text-sm transition-all duration-200 transform hover:scale-105"
    >
      {theme === "dark" ? <Sun className=" " /> : <Moon className=" " />}
    </Button>
  );
};

export default ThemeToggleButton;
