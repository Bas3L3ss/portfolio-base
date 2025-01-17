import { useState, useEffect } from "react";
import { useAppStore } from "@/lib/store";
import { Battery, Signal, Wifi } from "lucide-react";

const NavBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { batteryLevel } = useAppStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none select-none flex justify-between items-center p-2 mx-2 text-white ">
      <span>
        {currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>

      <div className="flex items-center gap-2 ">
        <Signal size={16} />
        <Wifi size={16} className="-mr-[10px]" />
        <BatteryIndicator percentage={batteryLevel} />
      </div>
    </div>
  );
};

export default NavBar;
const BatteryIndicator = ({ percentage }: { percentage: number }) => {
  const getBatteryColor = (level: number) => {
    if (level <= 20) return "bg-red-500";
    if (level <= 60) return "bg-yellow-500";
    return "bg-white";
  };

  const getTextColor = (level: number) => {
    if (level <= 20) return "text-red-500";
    if (level <= 60) return "text-yellow-500";
    return "text-white";
  };

  return (
    <div className="relative inline-flex items-center ">
      <div className="relative">
        <Battery
          className={`w-12 h-7 ${getTextColor(percentage)}`}
          strokeWidth={1.5}
        />
        <div
          className={`absolute h-[12.5px] left-[12px] top-[8.3px] bottom-[3px] ${getBatteryColor(
            percentage
          )} transition-all duration-300 rounded-sm`}
          style={{
            width: `${Math.min(percentage * 0.39, 39)}%`,
          }}
        />
      </div>
    </div>
  );
};
