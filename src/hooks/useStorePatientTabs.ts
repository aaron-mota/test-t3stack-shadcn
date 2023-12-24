import { create } from "zustand";

const patients = [
  { id: "12341234", name: "Jensen, Sara", href: "/patients/12341234" },
  { id: "4321412", name: "Doe, John", href: "/patients/4321412" },
  { id: "341342", name: "Martin, Ricky", href: "/patients/341342" },
];

export type PatientTypeMock = (typeof patients)[number];

type State = {
  patients: PatientTypeMock[];
  addPatient: (patient: PatientTypeMock) => void;
  removePatient: (patientId: string) => void;
  setHref: (patientId: string, navItem: string) => void;
};

export const useStorePatientTabs = create<State>((set) => ({
  patients: patients, // []
  addPatient: (patient) =>
    set((state) => ({ patients: [...state.patients, patient] })),
  removePatient: (patientId) =>
    set((state) => ({
      patients: state.patients.filter((p) => p.id !== patientId),
    })),
  setHref: (patientId, href) =>
    set((state) => ({
      patients: state.patients.map((p) =>
        p.id === patientId ? { ...p, href: href } : p,
      ),
    })),
  // More state and actions as needed...
}));
