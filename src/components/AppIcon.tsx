import { motion } from "framer-motion";
import { ReactNode } from "react";

const AppIcon = ({
  name,
  icon,
  onClick,
}: {
  name: string;
  icon: ReactNode;
  onClick: () => void;
}) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex flex-col items-center justify-center p-2 group"
  >
    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl shadow-md flex items-center justify-center mb-2 transition-colors duration-200">
      <span className="group-hover:-translate-y-1 transition-transform">
        {icon}
      </span>
    </div>
    <span className="text-sm text-gray-700 dark:text-gray-300">{name}</span>
  </motion.button>
);

export default AppIcon;
