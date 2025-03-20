import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();

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
    </div>
  );
};

export default SettingsPage;
