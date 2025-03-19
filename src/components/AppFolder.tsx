import React, { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import AppIcon from "./AppIcon";
import { useAppStore } from "@/lib/store";

export interface App {
  name: string;
  icon: ReactNode;
  link?: string;
}

const APPS_PER_PAGE = 9;

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
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [dragDirection, setDragDirection] = useState<"left" | "right" | null>(
    null
  );
  const [dragProgress, setDragProgress] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const contentControls = useAnimation();

  const totalPages = Math.ceil(apps.length / APPS_PER_PAGE);

  const previewApps = apps.slice(0, 4);

  const startX = useRef<number>(0);
  const distX = useRef<number>(0);

  useEffect(() => {
    setIsDraggable(!isOpen);
  }, [isOpen, setIsDraggable]);

  const handleOpen = (): void => {
    if (!folderRef.current) return;
    const rect = folderRef.current.getBoundingClientRect();
    setFolderRect(rect);
    setCurrentPage(0);
    setIsOpen(true);
  };

  useEffect(() => {
    const eventHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keyup", eventHandler);
    return () => document.removeEventListener("keyup", eventHandler);
  }, []);

  const getCurrentPageApps = () => {
    const startIdx = currentPage * APPS_PER_PAGE;
    return apps.slice(startIdx, startIdx + APPS_PER_PAGE);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    distX.current = 0;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    distX.current = e.touches[0].clientX - startX.current;

    if (distX.current > 0) {
      setDragDirection("right");
    } else if (distX.current < 0) {
      setDragDirection("left");
    }

    const maxDrag = 150;
    const progress = Math.min(Math.abs(distX.current) / maxDrag, 1);
    setDragProgress(progress);

    const dragX = Math.max(-100, Math.min(100, distX.current / 2));
    contentControls.start({
      x: dragX,
      opacity: 1 - Math.abs(dragX) / 200,
      transition: { duration: 0 },
    });
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (Math.abs(distX.current) > 50) {
      if (distX.current > 0 && currentPage > 0) {
        setCurrentPage((prev) => prev - 1);

        contentControls.start({
          x: [50, 0],
          opacity: [0.8, 1],
          transition: { duration: 0.3 },
        });
      } else if (distX.current < 0 && currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 1);

        contentControls.start({
          x: [-50, 0],
          opacity: [0.8, 1],
          transition: { duration: 0.3 },
        });
      } else {
        contentControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.3 },
        });
      }
    } else {
      contentControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      });
    }

    setDragDirection(null);
    setDragProgress(0);
    distX.current = 0;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    distX.current = 0;
    setIsDragging(true);

    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    if (e.buttons === 1) {
      distX.current = e.clientX - startX.current;

      if (distX.current > 0) {
        setDragDirection("right");
      } else if (distX.current < 0) {
        setDragDirection("left");
      }

      const maxDrag = 150;
      const progress = Math.min(Math.abs(distX.current) / maxDrag, 1);
      setDragProgress(progress);

      const dragX = Math.max(-100, Math.min(100, distX.current / 2));
      contentControls.start({
        x: dragX,
        opacity: 1 - Math.abs(dragX) / 200,
        transition: { duration: 0 },
      });
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (Math.abs(distX.current) > 30) {
      if (distX.current > 0 && currentPage > 0) {
        setCurrentPage((prev) => prev - 1);

        contentControls.start({
          x: [50, 0],
          opacity: [0.8, 1],
          transition: { duration: 0.3 },
        });
      } else if (distX.current < 0 && currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 1);

        contentControls.start({
          x: [-50, 0],
          opacity: [0.8, 1],
          transition: { duration: 0.3 },
        });
      } else {
        contentControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.3 },
        });
      }
    } else {
      contentControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      });
    }

    setDragDirection(null);
    setDragProgress(0);
    distX.current = 0;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      contentControls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 },
      });
      setDragDirection(null);
      setDragProgress(0);
    }
  };

  const renderNextPagePreview = () => {
    if (currentPage < totalPages - 1 && dragDirection === "left") {
      const nextPageApps = apps.slice(
        (currentPage + 1) * APPS_PER_PAGE,
        (currentPage + 1) * APPS_PER_PAGE + APPS_PER_PAGE
      );

      const translateX = dragProgress * -50;
      const opacity = Math.min(0.7, dragProgress);

      return (
        <div
          className="absolute top-0 left-full h-full w-full px-6 pt-6"
          style={{
            transform: `translateX(${translateX}px)`,
            opacity: opacity,
            pointerEvents: "none",
          }}
        >
          <div className="grid grid-cols-3 gap-4">
            {nextPageApps.map((app, index) => (
              <motion.div
                key={`next-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: dragProgress > 0.1 ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-200/80 dark:bg-gray-700/80 flex items-center justify-center shadow-sm">
                  {app.icon}
                </div>
                <div className="text-xs text-center mt-1 truncate">
                  {app.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const renderPrevPagePreview = () => {
    if (currentPage > 0 && dragDirection === "right") {
      const prevPageApps = apps.slice(
        (currentPage - 1) * APPS_PER_PAGE,
        (currentPage - 1) * APPS_PER_PAGE + APPS_PER_PAGE
      );

      const translateX = dragProgress * 50;
      const opacity = Math.min(0.7, dragProgress);

      return (
        <div
          className="absolute top-0 right-full h-full w-full px-6 pt-6"
          style={{
            transform: `translateX(${translateX}px)`,
            opacity: opacity,
            pointerEvents: "none",
          }}
        >
          <div className="grid grid-cols-3 gap-4">
            {prevPageApps.map((app, index) => (
              <motion.div
                key={`prev-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: dragProgress > 0.1 ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-200/80 dark:bg-gray-700/80 flex items-center justify-center shadow-sm">
                  {app.icon}
                </div>
                <div className="text-xs text-center mt-1 truncate">
                  {app.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="cursor-pointer">
      <motion.div
        ref={folderRef}
        onClick={handleOpen}
        className="flex flex-col items-center justify-center group"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="w-16 h-16 mb-2 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl backdrop-blur-xl p-0.5 shadow-lg">
          <div className="w-full h-full grid grid-cols-2 gap-0.5">
            {previewApps.map((app, index) => (
              <div
                key={`preview-${index}`}
                className="rounded-lg flex items-center justify-center text-sm bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-700 dark:to-gray-800"
              >
                {app.icon}
              </div>
            ))}
          </div>
        </div>
        <span className="text-xs text-center my-1 text-white">
          {folderName}
        </span>
      </motion.div>

      <AnimatePresence>
        {isOpen && folderRect && (
          <div className="absolute inset-0 -m-4 z-10">
            <motion.div
              className="absolute inset-0 flex flex-col gap-5 bg-black/30 backdrop-blur-sm items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute text-lg font-semibold truncate text-white top-36 left-[50%] -translate-x-[50%]">
                {folderName}
              </div>

              <motion.div
                className="bg-white/80 dark:bg-black/80 backdrop-blur-xl p-6 rounded-3xl w-72 shadow-2xl h-[350px] relative overflow-hidden"
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
                exit={{
                  opacity: 0,
                  scale: 0.3,
                }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  duration: 0.15,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                {/* Directional arrows */}
                {isDragging &&
                  dragDirection === "left" &&
                  currentPage < totalPages - 1 && (
                    <motion.div
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: dragProgress }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5L16 12L9 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}

                {isDragging && dragDirection === "right" && currentPage > 0 && (
                  <motion.div
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: dragProgress }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 5L8 12L15 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}

                <div className="relative w-full h-full overflow-hidden">
                  {/* Page previews */}
                  {renderPrevPagePreview()}
                  {renderNextPagePreview()}

                  <motion.div
                    className="grid grid-cols-3 gap-4 relative"
                    animate={contentControls}
                    key={`page-${currentPage}`}
                  >
                    {getCurrentPageApps().map((app, index) => (
                      <motion.div
                        key={`app-${currentPage}-${index}`}
                        initial={{ scale: 0.5, opacity: 0, y: 20 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                            delay: index * 0.03,
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
                </div>

                {/* Page indicators */}
                {totalPages > 1 && (
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <motion.button
                        key={`indicator-${idx}`}
                        onClick={() => setCurrentPage(idx)}
                        className={`w-3 h-3 rounded-full ${
                          currentPage === idx
                            ? "bg-white dark:bg-gray-200"
                            : "bg-gray-400/40 dark:bg-gray-600/40"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        animate={
                          currentPage === idx ? { scale: [1, 1.2, 1] } : {}
                        }
                        transition={{ duration: 0.3 }}
                        aria-label={`Go to page ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
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
