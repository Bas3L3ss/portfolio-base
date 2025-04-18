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
  <motion.section
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    transition={{ type: "spring", damping: 25, stiffness: 300 }}
    className={`w-full absolute inset-0 bg-white dark:bg-black rounded-t-xl overflow-hidden ${
      isFullscreen ? "z-30" : ""
    }`}
  >
    <div className="flex flex-col h-full">
      <div className="flex items-center px-4 py-2 border-b border-gray-200 dark:border-gray-800">
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

      <ScrollArea className="flex-1 overflow-auto pb-10">{children}</ScrollArea>
    </div>
  </motion.section>
);

export default AppScreen;
