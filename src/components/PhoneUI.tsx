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
    <section className=" w-full  h-full bg-black flex flex-col items-center justify-center overflow-hidden   bg-white/20 dark:bg-black/20  relative touch-pan-y">
      {!isRevealed && (
        <div className="absolute inset-0 opacity-15">
          <NavBar />

          <HomePage />
        </div>
      )}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -100 }}
            drag={!isRevealed ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2  text-white flex flex-col items-center">
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
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="w-1/2 h-[94.5%] flex-shrink-0">
              <HomePage isRevealed />
            </div>
            <div className="w-1/2  h-full flex-shrink-0">
              <SettingsPage />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhoneUI;
