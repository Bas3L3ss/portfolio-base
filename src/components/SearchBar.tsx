import { ReactNode, useEffect, useState } from "react";
import { FolderArchive, Phone, Search } from "lucide-react";
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
interface App {
  name: string;
  icon: ReactNode;
  onClick: () => void;
}
const appsToSearch: App[] = [
  {
    name: "About me",
    icon: <User className="h-4 w-4 shrink-0 text-white/40" />,
    onClick: () => {},
  },
  {
    name: "Projects",
    icon: <FolderArchive className="h-4 w-4 shrink-0 text-white/40" />,
    onClick: () => {},
  },
  {
    name: "Contact me",
    icon: <Phone className="h-4 w-4 shrink-0 text-white/40" />,
    onClick: () => {},
  },
];
const suggestedApps: App[] = [
  {
    name: "About me",
    icon: <User className="h-4 w-4 shrink-0 text-white/40" />,
    onClick: () => {},
  },
  {
    name: "Projects",
    icon: <FolderArchive className="h-4 w-4 shrink-0 text-white/40" />,
    onClick: () => {},
  },
  {
    name: "Contact me",
    icon: <Phone className="h-4 w-4 shrink-0 text-white/40" />,
    onClick: () => {},
  },
];

export function SearchBar() {
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
            className={cn(
              "absolute mt-1  left-1/2 z-50",
              !isOpen && "opacity-0"
            )}
            initial={{ opacity: 0, x: "-50%" }}
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
