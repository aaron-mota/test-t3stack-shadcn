import { create } from "zustand";

const patients = [
  { id: "12341234", name: "Jensen, Sara", activeNavItem: "summary" },
  { id: "4321412", name: "Doe, John", activeNavItem: "summary" },
  { id: "341342", name: "Martin, Ricky", activeNavItem: "summary" },
];

export type PatientTypeMock = (typeof patients)[number];

type State = {
  patients: PatientTypeMock[];
  addPatient: (patient: PatientTypeMock) => void;
  removePatient: (patientId: string) => void;
  setActiveSideNavItem: (patientId: string, navItem: string) => void;
};

export const useStorePatientTabs = create<State>((set) => ({
  patients: patients, // []
  addPatient: (patient) =>
    set((state) => ({ patients: [...state.patients, patient] })),
  removePatient: (patientId) =>
    set((state) => ({
      patients: state.patients.filter((p) => p.id !== patientId),
    })),
  setActiveSideNavItem: (patientId, navItem) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId ? { ...p, activeNavItem: navItem } : p,
      ),
    })),
  // More state and actions as needed...
}));
