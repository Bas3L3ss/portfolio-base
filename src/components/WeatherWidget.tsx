import { Smile, Sun } from "lucide-react";

const WeatherWidget = () => {
  return (
    <>
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl text-white p-6  shadow-lg flex items-center justify-between space-x-4 w-full mx-auto">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Today&apos;s Weather</h3>
          <p className="text-2xl font-medium">Sunny, 25°C</p>
        </div>
        <Sun className="w-12 h-12 text-yellow-300" />
      </div>
      <p className="-mt-[10px] text-xs text-white text-center ">
        How are you feeling today 😁?
      </p>
    </>
  );
};

export default WeatherWidget;
