import React, { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppIcon from "./AppIcon";
import { useAppStore } from "@/lib/store";

export interface App {
  name: string;
  icon: ReactNode;
  link?: string;
}

interface DOMRect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
}

const AppFolder = ({
  folderName,
  apps,
}: {
  folderName: string;
  apps: App[];
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setIsDraggable } = useAppStore();
  const folderRef = useRef<HTMLDivElement | null>(null);
  const [folderRect, setFolderRect] = useState<DOMRect | null>(null);

  const previewApps = apps.slice(0, 4);

  useEffect(() => {
    setIsDraggable(!isOpen);
  }, [isOpen, setIsDraggable]);

  const handleOpen = (): void => {
    if (!folderRef.current) return;
    const rect = folderRef.current.getBoundingClientRect();
    setFolderRect(rect);
    setIsOpen(true);
  };

  return (
    <div className="cursor-pointer  ">
      <motion.div
        ref={folderRef}
        onClick={handleOpen}
        className="flex flex-col items-center justify-center   group "
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="w-16 h-16 mb-2 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl backdrop-blur-xl p-0.5 shadow-lg ">
          <div className="w-full h-full grid grid-cols-2 gap-0.5 ">
            {previewApps.map((app, index) => (
              <div
                key={index}
                className="rounded-lg flex items-center justify-center text-sm bg-gradient-to-br from-gray-50 to-gray-200"
              >
                {app.icon}
              </div>
            ))}
          </div>
        </div>
        <span className="text-xs text-center my-1  text-white">
          {folderName}
        </span>
      </motion.div>

      {/* Folder Container */}
      <AnimatePresence>
        {isOpen && folderRect && (
          <div className="absolute inset-0 -m-4 z-10">
            <motion.div
              className="absolute inset-0 flex flex-col gap-5 bg-black/30 backdrop-blur-sm  items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className=" absolute text-lg font-semibold truncate text-white  top-36 left-[50%] -translate-x-[50%]">
                {folderName}
              </div>
              <motion.div
                className=" bg-white/80 dark:bg-black/80 backdrop-blur-xl p-6 rounded-3xl w-72 shadow-2xl min-h-[310px] "
                initial={{
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  duration: 0.15,
                }}
              >
                <motion.div
                  className="grid    grid-cols-3 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.03,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                >
                  {apps.map((app, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { scale: 0.5, opacity: 0, y: 20 },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                          },
                        },
                      }}
                    >
                      <AppIcon
                        className="p-0"
                        name={app.name}
                        icon={app.icon}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute inset-0 -z-10"
                onClick={() => setIsOpen(false)}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(AppFolder);
