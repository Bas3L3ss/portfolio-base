"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IPhoneFrame from "@/components/IphoneIframe";
import PhoneUI from "@/components/PhoneUI";
import BootAnimation from "@/components/BootAnimation";
import Footer from "@/components/Footer";
import Typewriter from "typewriter-effect";
import { useAppStore } from "@/lib/store";
import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);

  const { batteryLevel, setBatteryLevel } = useAppStore();
  useEffect(() => {
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleTabKey);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(Math.max(0, batteryLevel - 1));
    }, 60000);

    return () => clearInterval(interval);
  }, [batteryLevel, setBatteryLevel]);

  const skipBootAnimation = () => {
    setIsBooting(false);
  };

  return (
    <main className="text-gray-900 min-h-screen">
      <article className="flex flex-col items-center justify-between p-6 md:p-24 space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl font-extrabold text-indigo-700">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcomes to my portfolio 👋")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm Pham Thien Hung")
                  .start();
              }}
            />
          </h1>
          <p className="text-xl text-gray-600 dark:text-white">
            Welcome to my portfolio! Tap on the iPhone to explore and get to
            know me better!
          </p>
        </div>
        <div className="w-full max-w-[375px]">
          <IPhoneFrame>
            <AnimatePresence>
              {isBooting ? (
                <BootAnimation key="boot" />
              ) : (
                <motion.div
                  key="phone-ui"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <PhoneUI />
                </motion.div>
              )}
            </AnimatePresence>
          </IPhoneFrame>
        </div>
      </article>
      <Footer />

      {/* Skip Boot Animation Button */}
      {isBooting ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg z-50 text-sm transition-all duration-200 transform hover:scale-105"
          onClick={skipBootAnimation}
        >
          Skip Intro
        </motion.button>
      ) : (
        <ThemeToggleButton />
      )}
    </main>
  );
}
