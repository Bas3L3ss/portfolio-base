import { create } from "zustand";

interface AppState {
  isDraggable: boolean;
  setIsDraggable: (isDraggable: boolean) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  batteryLevel: number;
  setBatteryLevel: (level: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: 0,
  setCurrentPage: (page) => set({ currentPage: page }),
  batteryLevel: 100,
  setBatteryLevel: (level) => set({ batteryLevel: level }),
  isDraggable: true,
  setIsDraggable: (isDraggable) => set({ isDraggable }),
}));
