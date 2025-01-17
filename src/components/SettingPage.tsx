import { useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import SnakeGame from "./SnakeGame";

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="w-full h-full p-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Settings</h2>
      <div className="flex items-center space-x-2 mb-4">
        <Switch
          id="dark-mode"
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
        <Label htmlFor="dark-mode" className="text-white">
          Dark Mode
        </Label>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowGame(!showGame)}
      >
        {showGame ? "Hide" : "Show"} Snake Game
      </button>
      {showGame && <SnakeGame />}
    </div>
  );
};

export default SettingsPage;
