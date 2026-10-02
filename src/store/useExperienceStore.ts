import { create } from 'zustand';

export type ExperienceState = 
  | "LANDING"
  | "FACULTY_INTRO"
  | "FACULTY_SHOWCASE"
  | "DIGITAL_TWIN_LOADING"
  | "DIGITAL_TWIN";

interface ExperienceStore {
  phase: ExperienceState;
  currentFacultyIndex: number;
  setPhase: (phase: ExperienceState) => void;
  nextFaculty: () => void;
  prevFaculty: () => void;
}

export const useExperienceStore = create<ExperienceStore>((set) => ({
  phase: "LANDING",
  currentFacultyIndex: 0,
  setPhase: (phase) => set({ phase }),
  nextFaculty: () => set((state) => ({ currentFacultyIndex: state.currentFacultyIndex + 1 })),
  prevFaculty: () => set((state) => ({ currentFacultyIndex: Math.max(0, state.currentFacultyIndex - 1) })),
}));
