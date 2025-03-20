import { ReactNode, useEffect, useState } from "react";
import {
  Database,
  FolderArchive,
  NetworkIcon,
  Phone,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Calculator,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Grafana,
  Kubernetes,
  NodeJs,
  Playwright,
  TypeScript,
  VisualStudioCode,
} from "developer-icons";
import { FaAws } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
interface App {
  name: string;
  icon: ReactNode;
  to: string;
}
const appsToSearch: App[] = [
  {
    name: "About me",
    to: "about",
    icon: <User className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Projects",
    to: "projects",
    icon: <FolderArchive className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Experience",
    to: "experience",
    icon: <Calendar className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Testimonials",
    to: "testimonials",
    icon: <Smile className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Blogs",
    to: "blogs",
    icon: <CreditCard className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Contact me",
    to: "contact",
    icon: <Phone className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Programming Languages",
    to: "languages",
    icon: <Calculator className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Frameworks & Libraries",
    to: "frameworks",
    icon: <Settings className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Backend Development",
    to: "backend",
    icon: <NodeJs className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "DevOps",
    to: "devsop",
    icon: <Kubernetes className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Version Control",
    to: "versioning",
    icon: <FolderArchive className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Cloud Computing",
    to: "cloud computing",
    icon: <FaAws className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Databases",
    to: "databases",
    icon: <Database className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Testing",
    to: "testing",
    icon: <Playwright className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "IDEs & Tools",
    to: "ides",
    icon: <VisualStudioCode className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Analytics & Tracking",
    to: "analytics",
    icon: <Grafana className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "Data Structures & Algorithms",
    to: "dsa",
    icon: <SiLeetcode className="h-4 w-4 shrink-0 text-white/40" />,
  },
  {
    name: "System Design",
    to: "system design",
    icon: <NetworkIcon className="h-4 w-4 shrink-0 text-white/40" />,
  },
];

const suggestedApps: App[] = [
  {
    name: "About me",
    icon: <User className="h-4 w-4 shrink-0 text-white/40" />,
    to: "about",
  },
  {
    name: "Contact me",
    icon: <Phone className="h-4 w-4 shrink-0 text-white/40" />,

    to: "contact",
  },
  {
    name: "Programming Languages",
    icon: <TypeScript className="h-4 w-4 shrink-0 text-white/40" />,

    to: "languages",
  },
];

export function SearchBar({ openScreen }: { openScreen: (s: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const eventHandler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "f") {
        e.preventDefault(); // Prevent browser's default "Find" action
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", eventHandler);
    return () => document.removeEventListener("keydown", eventHandler);
  }, []);
  return (
    <div className="overflow-hidden">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className={cn("absolute    left-1/2 z-50", !isOpen && "opacity-0")}
            initial={{ opacity: 0, x: "-50%", y: "-40%" }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOpen(true)}
            >
              <motion.div
                className="flex items-center h-12 rounded-full bg-black/10 backdrop-blur-xl border border-white/20 hover:bg-black/20 overflow-hidden cursor-pointer"
                initial={{ width: 48 }}
                animate={{
                  width: isHovered ? 260 : 48,
                }}
                transition={{
                  stiffness: 500,
                  damping: 10,
                }}
              >
                <motion.div
                  className="flex items-center gap-3 w-full px-4"
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: isHovered ? 0.1 : 0,
                  }}
                >
                  <span className="text-sm text-white/70 whitespace-nowrap">
                    Search for apps...
                  </span>
                </motion.div>

                <motion.span
                  className="absolute  right-[0.8rem]"
                  transition={{
                    stiffness: 500,
                    damping: 30,
                  }}
                >
                  <Search className="h-5 w-5  text-white/70" />
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              className="w-full max-w-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            >
              <Command className="rounded-2xl border shadow-2xl bg-black/40 backdrop-blur-xl border-white/20">
                <div className="flex items-center border-b border-white/10 px-3">
                  <CommandInput
                    placeholder="Search information about me..."
                    className="h-14 flex-1 bg-transparent text-white placeholder:text-white/40"
                    autoFocus
                  />
                </div>
                <CommandList className="text-white">
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions" className="text-white/60">
                    {suggestedApps.map((app) => {
                      return (
                        <CommandItem
                          onSelect={() => {
                            openScreen(app.to);
                          }}
                          key={app.name + "-suggested"}
                          className="hover:bg-white/10"
                        >
                          {app.icon}
                          <span>{app.name}</span>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                  <CommandSeparator className="bg-white/10" />
                  <CommandGroup
                    heading="My information"
                    className="text-white/60"
                  >
                    {appsToSearch.map((app) => {
                      return (
                        <CommandItem
                          onSelect={() => {
                            openScreen(app.to);
                          }}
                          key={app.name + "-search"}
                          className="hover:bg-white/10"
                        >
                          {app.icon}
                          <span>{app.name}</span>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
