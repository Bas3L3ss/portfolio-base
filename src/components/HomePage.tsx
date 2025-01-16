import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code, User, Folder, StarIcon } from "lucide-react";
import {
  AboutScreen,
  ExperienceScreen,
  ProjectsScreen,
  SkillsScreen,
  TestimonialsScreen,
} from "./AppScreens";
import AppIcon from "./AppIcon";
import WeatherWidget from "./WeatherWidget";
import { useAppStore } from "@/lib/store";
const HomePage = () => {
  const [activeScreen, setActiveScreen] = useState<string | null>(null);
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const { setIsDraggable } = useAppStore();

  useEffect(() => {
    if (activeScreen && activeScreen != "" && activeScreen?.length > 0) {
      setIsDraggable(false);
    } else {
      setIsDraggable(true);
    }
  }, [activeScreen, setIsDraggable]);

  const apps = [
    { id: "about", name: "About Me", icon: <User className="w-8 h-8" /> },
    { id: "projects", name: "Projects", icon: <Folder className="w-8 h-8" /> },
    {
      id: "experience",
      name: "Experience",
      icon: <Briefcase className="w-8 h-8" />,
    },
    { id: "skills", name: "Skills", icon: <Code className="w-8 h-8" /> },
    {
      id: "testimonials",
      name: "Testimonials",
      icon: <StarIcon className="w-8 h-8" />,
    },
  ];

  const openScreen = (screenId: string | null) => {
    setActiveScreen(screenId);
    setIsHomeVisible(false);
  };

  const closeScreen = () => {
    setActiveScreen(null);
    setIsHomeVisible(true);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4   relative overflow-hidden">
      <WeatherWidget />
      <AnimatePresence>
        {isHomeVisible && (
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-3   "
          >
            {apps.map((app) => (
              <AppIcon
                key={app.id}
                name={app.name}
                icon={app.icon}
                onClick={() => openScreen(app.id)}
              />
            ))}
          </motion.div>
        )}

        {activeScreen === "about" && <AboutScreen onBack={closeScreen} />}
        {activeScreen === "projects" && <ProjectsScreen onBack={closeScreen} />}
        {activeScreen === "experience" && (
          <ExperienceScreen onBack={closeScreen} />
        )}
        {activeScreen === "skills" && <SkillsScreen onBack={closeScreen} />}
        {activeScreen === "testimonials" && (
          <TestimonialsScreen onBack={closeScreen} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
