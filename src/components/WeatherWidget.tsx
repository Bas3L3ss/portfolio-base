import { Sun } from "lucide-react";

const WeatherWidget = () => {
  return (
    <div className="bg-white/20 backdrop-blur-lg text-white p-6 rounded-lg shadow-lg flex items-center justify-between space-x-4 max-w-sm mx-auto">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Today&apos;s Weather</h3>
        <p className="text-2xl font-medium">Sunny, 25°C</p>
      </div>
      <Sun className="w-12 h-12 text-yellow-300" />
    </div>
  );
};

export default WeatherWidget;
