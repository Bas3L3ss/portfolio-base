import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NetworkIcon,
  Briefcase,
  User,
  StarIcon,
  GitGraphIcon,
  Phone,
  Newspaper,
} from "lucide-react";
import {
  AboutScreen,
  ExperienceScreen,
  TestimonialsScreen,
} from "./AppScreens";
import AppIcon from "./AppIcon";
import WeatherWidget from "./WeatherWidget";
import { useAppStore } from "@/lib/store";
import AppFolder, { App } from "./AppFolder";
import * as DevIcons from "developer-icons";
import { useTheme } from "next-themes";
import { SearchBar } from "./SearchBar";
import SocialWidget from "./MyselfWidget";
import SpotifyWidget from "./SpotifyWidget";
const HomePage = () => {
  const [activeScreen, setActiveScreen] = useState<string | null>(null);
  const { theme } = useTheme();
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const { setIsDraggable } = useAppStore();

  useEffect(() => {
    if (activeScreen && activeScreen != "" && activeScreen?.length > 0) {
      setIsDraggable(false);
    } else {
      setIsDraggable(true);
    }
  }, [activeScreen, setIsDraggable]);

  const appsTop = [
    {
      id: "experience",
      name: "Experience",
      icon: <Briefcase className="w-8 h-8" />,
    },
  ];
  const appsBottom = [
    { id: "about", name: "About Me", icon: <User className="w-8 h-8" /> },
    { id: "contact", name: "Contact Me", icon: <Phone className="w-8 h-8" /> },

    {
      id: "testimonials",
      name: "Testimonials",
      icon: <StarIcon className="w-8 h-8" />,
    },
    {
      id: "blogs",
      name: "Blogs",
      icon: <Newspaper className="w-8 h-8" />,
    },
  ];

  const skillsApps: App[] = [
    {
      name: "Nextjs",
      icon: <DevIcons.NextJs className="" size={32} />,
    },
    {
      name: "Docker",
      icon: <DevIcons.Docker size={32} />,
    },

    {
      name: "Cloud computing",
      icon: <DevIcons.GoogleCloud className="" size={32} />,
    },
    {
      name: "PostgresSQL",
      icon: <DevIcons.PostgreSQL className="" size={32} />,
    },
    {
      name: "ExpressJS",
      icon:
        theme != "dark" ? (
          <DevIcons.ExpressJsDark className="" size={32} />
        ) : (
          <DevIcons.ExpressJsLight className="" size={32} />
        ),
    },

    {
      name: "Redis",
      icon: <DevIcons.Redis className="" size={32} />,
    },
    {
      name: "System Design",
      icon: <NetworkIcon className="" size={32} />,
    },
    {
      name: "Testing",
      icon: <DevIcons.Jest className="" size={32} />,
    },
    {
      name: "DSA",
      icon: <GitGraphIcon className="" size={32} />,
    },
  ];
  const studyCasesApps: App[] = [];
  const projectApps: App[] = [];

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
      {isHomeVisible && (
        <>
          <AnimatePresence>
            <div className=" grid grid-cols-2 gap-5">
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-2 flex-1"
              >
                {appsTop.map((app) => (
                  <AppIcon
                    key={app.id}
                    name={app.name}
                    icon={app.icon}
                    onClick={() => openScreen(app.id)}
                  />
                ))}
                <AppFolder apps={skillsApps} folderName="Tech skills" />
                <AppFolder apps={studyCasesApps} folderName="Study cases" />
                <AppFolder apps={projectApps} folderName="Projects" />
              </motion.div>
              <SpotifyWidget />
            </div>
          </AnimatePresence>
          <WeatherWidget />

          <div className="grid grid-cols-2 gap-5 relative">
            <SocialWidget />

            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid  grid-cols-2 "
            >
              {appsBottom.map((app) => (
                <AppIcon
                  key={app.id}
                  name={app.name}
                  icon={app.icon}
                  onClick={() => openScreen(app.id)}
                />
              ))}
            </motion.div>
          </div>

          <SearchBar />
        </>
      )}
      {activeScreen === "about" && <AboutScreen onBack={closeScreen} />}
      {activeScreen === "experience" && (
        <ExperienceScreen onBack={closeScreen} />
      )}
      {activeScreen === "testimonials" && (
        <TestimonialsScreen onBack={closeScreen} />
      )}
    </div>
  );
};

export default HomePage;
