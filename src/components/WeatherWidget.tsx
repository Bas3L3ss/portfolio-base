import { Sun } from "lucide-react";
import { motion } from "framer-motion";
const WeatherWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-blue-500/80 to-purple-600/80 backdrop-blur-lg rounded-3xl text-white p-5 shadow-lg w-full mx-auto overflow-hidden">
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-yellow-300/20 blur-xl" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-blue-300/20 blur-xl" />

        <div className="flex items-center justify-between space-x-4 relative z-10">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white/90">
              My Experience
            </h3>
            <p className="text-2xl font-medium">+2 years</p>
            <p className="text-sm font-light text-white/80">
              Professional development
            </p>
          </div>
          <div className="bg-yellow-400/20 p-3 rounded-2xl">
            <Sun className="w-10 h-10 text-yellow-300" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 shadow-sm mt-2 mx-auto w-fit"
      >
        <p className="text-sm text-white text-center">
          How are you feeling today? 😁
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WeatherWidget;
