"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { ChevronUp } from "lucide-react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import SettingsPage from "./SettingPage";

const PhoneUI = () => {
  const { currentPage, setCurrentPage, isDraggable } = useAppStore();
  const [isRevealed, setIsRevealed] = useState(false);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!isRevealed) {
      if (info.offset.y < -50) {
        setIsRevealed(true);
      }
      return;
    }

    const threshold = window.innerWidth * 0.2;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0 && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      } else if (info.offset.x < 0 && currentPage < 1) {
        setCurrentPage(currentPage == 1 ? currentPage : currentPage + 1);
      }
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-black w-full h-full overflow-hidden relative touch-pan-y"
      drag={!isRevealed ? "y" : false}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
    >
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/api/placeholder/400/800')",
            }}
            initial={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -100 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 dark:text-white flex flex-col items-center">
              <ChevronUp className="animate-bounce w-8 h-8" />
              <p className="text-sm mt-2 ">Swipe up to unlock</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isRevealed ? 1 : 0,
          pointerEvents: isRevealed ? "auto" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <NavBar />
        <motion.div
          className="w-full h-[calc(100%)]"
          {...(isDraggable && {
            drag: isRevealed ? "x" : false,
            dragConstraints: { left: 0, right: 0 },
            dragElastic: 0.2,
            onDragEnd: handleDragEnd,
          })}
        >
          <motion.div
            className="flex h-full"
            style={{ width: "200%" }}
            animate={{
              x: `-${currentPage * 50}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="w-1/2 h-full flex-shrink-0">
              <HomePage />
            </div>
            <div className="w-1/2  h-full flex-shrink-0">
              <SettingsPage />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PhoneUI;
