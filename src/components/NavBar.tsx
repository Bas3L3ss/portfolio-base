import { useState, useEffect } from "react";
import { useAppStore } from "@/lib/store";

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { batteryLevel } = useAppStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none select-none flex justify-between items-center px-4 py-1 text-white text-xs font-medium">
      {/* Left side: Time */}
      <span className="font-semibold">
        {currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </span>

      {/* Right side: Icons */}
      <div className="flex items-center gap-1">
        {/* Cellular signal */}
        <div className="flex items-end h-3 mr-1">
          <div className="w-0.5 h-1 bg-white rounded-sm"></div>
          <div className="w-0.5 h-1.5 bg-white rounded-sm mx-px"></div>
          <div className="w-0.5 h-2 bg-white rounded-sm"></div>
          <div className="w-0.5 h-2.5 bg-white rounded-sm mx-px"></div>
        </div>

        {/* WiFi */}
        <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
          <path d="M12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4.07-1.59l.83.84c.39.39.9.59 1.41.59h.17c.5 0 1.01-.2 1.41-.59l.83-.84c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-.83.83c-.39.39-1.02.39-1.41 0l-.83-.83c-.2-.2-.51-.2-.71 0-.19.2-.19.52 0 .71zm2.07-4.41c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-3-3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm14.92-.48l-.71-.7c-.13-.13-.29-.19-.45-.19s-.32.06-.45.19l-1.27 1.27-3.11-3.11c-.13-.13-.29-.19-.45-.19s-.32.06-.45.19L12 9.1 8.93 6.03c-.13-.13-.29-.19-.45-.19s-.32.06-.45.19L5.08 9.16 3.82 7.9c-.13-.13-.29-.19-.45-.19s-.32.06-.45.19l-.71.7c-.13.13-.19.29-.19.45s.06.32.19.45l1.97 1.96c.13.13.29.19.45.19s.32-.06.45-.19l2.95-2.95L12 12.10l3.96-3.96 2.95 2.95c.13.13.29.19.45.19s.32-.06.45-.19l1.97-1.96c.13-.13.19-.29.19-.45s-.06-.32-.19-.45z" />
        </svg>

        {/* Battery */}
        <BatteryIndicator percentage={batteryLevel} />
      </div>
    </div>
  );
};

export default StatusBar;

const BatteryIndicator = ({ percentage }: { percentage: number }) => {
  const getBatteryColor = (level: number) => {
    if (level <= 20) return "bg-red-500";
    if (level <= 60) return "bg-yellow-500";
    return "bg-white";
  };

  return (
    <div className="relative flex items-center ml-1 p-1">
      {/* Battery percentage */}
      <span className="text-xs mr-1">{percentage}%</span>

      {/* Battery icon */}
      <div className="relative flex items-center">
        {/* Battery body */}
        <div className="w-6 h-3 border border-white rounded-sm relative">
          {/* Battery fill */}
          <div
            className={`absolute top-0 left-0 bottom-0 ${getBatteryColor(
              percentage
            )} transition-all duration-300 rounded-sm`}
            style={{
              width: `${Math.max(Math.min(percentage, 100), 0)}%`,
            }}
          />
        </div>

        {/* Battery tip */}
        <div className="w-0.5 h-1.5 bg-white rounded-sm ml-px"></div>
      </div>
    </div>
  );
};
