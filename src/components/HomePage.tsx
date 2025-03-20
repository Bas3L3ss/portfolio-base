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
  CTAScreen,
  AboutScreen,
  ExperienceScreen,
  TestimonialsScreen,
  BlogScreen,
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
import {
  AnalyticsScreen,
  CloudComputingScreen,
  DatabasesScreen,
  DevsOpScreen,
  DSAScreen,
  FrameworkScreen,
  IDEScreen,
  LanguagesScreen,
  ServerRuntimeScreen,
  SystemDesignScreen,
  TestingScreen,
  VersioningScreen,
} from "./SkillScreens";
import { SiLeetcode } from "react-icons/si";

const HomePage = ({ isRevealed = false }: { isRevealed?: boolean }) => {
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
      name: "Languages",
      icon: <DevIcons.TypeScript className="" size={32} />,
    },
    {
      name: "Frameworks",
      icon: <DevIcons.NextJs className="" size={32} />,
    },
    {
      name: "Backend",
      icon: <DevIcons.NodeJs size={32} />,
    },
    {
      name: "DevsOp",
      icon: <DevIcons.Kubernetes size={32} />,
    },
    {
      name: "Versioning",
      icon: <DevIcons.Git size={32} />,
    },

    {
      name: "Cloud computing",
      icon: <DevIcons.GoogleCloud size={32} />,
    },
    {
      name: "Databases",
      icon: <DevIcons.PostgreSQL className="" size={32} />,
    },

    {
      name: "System Design",
      icon: <NetworkIcon className="" size={32} />,
    },
    {
      name: "Testing",
      icon: <DevIcons.Playwright className="" size={32} />,
    },
    {
      name: "DSA",
      icon: <SiLeetcode className="" size={32} />,
    },
    {
      name: "Analytics",
      icon: <DevIcons.Grafana className="" size={32} />,
    },
    {
      name: "IDEs",
      icon: <DevIcons.VisualStudioCode className="" size={32} />,
    },
  ];
  const studyCasesApps: App[] = [];
  const projectApps: App[] = [];

  const openScreen = (screenId: string | null) => {
    setActiveScreen(screenId);
  };

  const closeScreen = () => {
    setActiveScreen(null);
    setIsHomeVisible(true);
  };

  useEffect(() => {
    const eventHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeScreen();
      }
    };

    document.addEventListener("keyup", eventHandler);
    return () => document.removeEventListener("keyup", eventHandler);
  }, []);

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
                <AppFolder
                  openScreen={openScreen}
                  apps={skillsApps}
                  folderName="Tech skills"
                />
                <AppFolder
                  openScreen={openScreen}
                  apps={studyCasesApps}
                  folderName="Study cases"
                />
                <AppFolder
                  openScreen={openScreen}
                  apps={projectApps}
                  folderName="Projects"
                />
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
          {isRevealed && <>{!activeScreen && <SearchBar />}</>}
        </>
      )}
      {activeScreen === "about" && <AboutScreen onBack={closeScreen} />}
      {activeScreen === "experience" && (
        <ExperienceScreen onBack={closeScreen} />
      )}
      {activeScreen === "testimonials" && (
        <TestimonialsScreen onBack={closeScreen} />
      )}
      {activeScreen === "blogs" && <BlogScreen onBack={closeScreen} />}
      {activeScreen === "contact" && <CTAScreen onBack={closeScreen} />}
      {activeScreen === "languages" && <LanguagesScreen onBack={closeScreen} />}
      {activeScreen === "frameworks" && (
        <FrameworkScreen onBack={closeScreen} />
      )}
      {activeScreen === "backend" && (
        <ServerRuntimeScreen onBack={closeScreen} />
      )}
      {activeScreen === "devsop" && <DevsOpScreen onBack={closeScreen} />}
      {activeScreen === "versioning" && (
        <VersioningScreen onBack={closeScreen} />
      )}
      {activeScreen === "cloud computing" && (
        <CloudComputingScreen onBack={closeScreen} />
      )}
      {activeScreen === "databases" && <DatabasesScreen onBack={closeScreen} />}
      {activeScreen === "testing" && <TestingScreen onBack={closeScreen} />}
      {activeScreen === "ides" && <IDEScreen onBack={closeScreen} />}
      {activeScreen === "analytics" && <AnalyticsScreen onBack={closeScreen} />}
      {activeScreen === "dsa" && <DSAScreen onBack={closeScreen} />}
      {activeScreen === "system design" && (
        <SystemDesignScreen onBack={closeScreen} />
      )}
    </div>
  );
};

export default HomePage;
