"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AppIconProps {
  name: string;
  icon: ReactNode;
  onClick: () => void;
  className?: string;
}

const AppIcon: React.FC<AppIconProps> = ({
  name,
  icon,
  onClick,
  className,
}) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClick}
              className={cn(
            "flex flex-col items-center justify-center group",
            className
          )}
        >
          <motion.div
            className="w-[60px] h-[60px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-[20px] shadow-lg flex items-center justify-center mb-2 transition-all duration-300 ease-in-out"
            whileHover={{
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <motion.span
              className="text-2xl text-gray-700 dark:text-gray-300"
              initial={{ y: 0 }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.span>
          </motion.div>
          <motion.span
            className="text-xs font-medium text-white truncate w-full text-center block"
            style={{ maxWidth: "4.5rem" }}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {name}
          </motion.span>
        </motion.button>
      </TooltipTrigger>
      <TooltipContent
        sideOffset={5}
        alignOffset={50}
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs px-2 py-1 rounded-md shadow-md"
      >
        {name}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default AppIcon;
