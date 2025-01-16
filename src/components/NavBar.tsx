import { useState, useEffect } from "react";
import { useAppStore } from "@/lib/store";
import {
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  Signal,
  Wifi,
} from "lucide-react";

const NavBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { batteryLevel } = useAppStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getBatteryIcon = () => {
    if (batteryLevel > 70) return <BatteryFull className="w-6 h-6" />;
    if (batteryLevel > 30) return <BatteryMedium className="w-6 h-6" />;
    return <BatteryLow className="w-6 h-6" />;
  };

  return (
    <div className="pointer-events-none select-none flex justify-between items-center p-2 bg-gray-800 text-white">
      <span>{currentTime.toLocaleTimeString()}</span>

      <div className="flex items-center gap-2">
        <Wifi size={16} />
        <Signal size={16} />
        {getBatteryIcon()}
        <span className="">{batteryLevel}%</span>
      </div>
    </div>
  );
};

export default NavBar;
