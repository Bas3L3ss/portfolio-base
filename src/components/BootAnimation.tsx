"use client";

import { motion } from "framer-motion";
import AppleLogo from "./icon/Apple";

const BootAnimation = () => {
  return (
    <div className="w-full  h-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8"
      >
        <AppleLogo color="white" className="size-48 -mb-10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          className="text-white text-2xl font-thin mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Pham Thien Hung OS
        </motion.h1>
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Powered by BaseLess Works
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <div className="w-12 h-1 bg-white rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-[6.5rem] left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <p className="text-gray-400 text-xs">
          © 2025 Pham Thien Hung. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default BootAnimation;
