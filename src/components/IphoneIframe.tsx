import React from "react";

interface IPhoneFrameProps {
  children: React.ReactNode;
}

const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ children }) => {
  return (
    <main id="phone" className="relative mx-auto">
      {/* Device Frame */}
      <div
        className={`
        relative w-[405px] h-[792px] rounded-[55px] overflow-hidden shadow-2xl
        bg-gray-200 dark:bg-gray-800
        transition-colors duration-300
      `}
      >
        {/* Inner Screen Container */}
        <div
          className={`
          absolute inset-[3px] rounded-[52px] overflow-hidden
          bg-white dark:bg-gray-900
          transition-colors duration-300
        `}
        >
          {/* Screen Content Container */}
          <div className="relative h-full w-full">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[126px] h-[35px] bg-black rounded-b-3xl z-50">
              {/* Camera Dot */}
              <div className="absolute top-[8px] right-[32px] w-[10px] h-[10px] rounded-full bg-gray-800"></div>
              {/* Face ID Sensors */}
              <div className="absolute top-[10px] left-[32px] w-[6px] h-[6px] rounded-full bg-gray-800"></div>
            </div>
            {/* Main Content Area */}
            <div
              className="absolute inset-0 mt-[35px] z-10 overflow-y-auto 
                            text-gray-900 dark:text-gray-100
                            transition-colors duration-300"
              style={{ backgroundImage: "url('/wallpaper.jpg')" }}
            >
              {children}
            </div>
          </div>
        </div>
        {/* Volume Buttons (Left Side) */}
        <div className="absolute left-[-2px] top-[120px] w-[4px] h-[35px] bg-gray-400 dark:bg-gray-600 rounded-l-lg transition-colors duration-300"></div>
        <div className="absolute left-[-2px] top-[170px] w-[4px] h-[65px] bg-gray-400 dark:bg-gray-600 rounded-l-lg transition-colors duration-300"></div>
        {/* Power Button (Right Side) */}
        <div className="absolute right-[-2px] top-[120px] w-[4px] h-[65px] bg-gray-400 dark:bg-gray-600 rounded-r-lg transition-colors duration-300"></div>
        {/* Home Indicator */}
        <div
          className={`
          absolute bottom-2 left-1/2 transform -translate-x-1/2
          w-[134px] h-[5px] bg-gray-900 dark:bg-gray-100
          rounded-full z-50 transition-colors duration-300
        `}
        ></div>
      </div>
      {/* Subtle Device Shadow */}
      <div className="absolute inset-0 rounded-[55px] shadow-lg opacity-20"></div>
    </main>
  );
};

export default IPhoneFrame;
