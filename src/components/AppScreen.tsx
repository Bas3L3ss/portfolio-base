import { ArrowLeft } from "lucide-react";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ScrollArea } from "./ui/scroll-area";

const AppScreen = ({
  children,
  title,
  onBack,
  isFullscreen = true,
}: {
  children: ReactNode;
  title: string;
  onBack: () => void;
  isFullscreen?: boolean;
}) => (
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ type: "spring", damping: 20 }}
    className={`absolute inset-0 bg-gray-50 dark:bg-gray-900 ${
      isFullscreen ? "z-30" : ""
    }`}
  >
    <div className="flex flex-col  h-full ">
      <div className="flex items-center px-4 py-2 border-b dark:border-gray-800">
        {onBack && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="mr-4 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
        )}
        <h1 className="text-lg font-semibold flex-1">{title}</h1>
      </div>
      <ScrollArea className="flex-1 overflow-auto ">{children}</ScrollArea>
    </div>
  </motion.div>
);
export default AppScreen;
