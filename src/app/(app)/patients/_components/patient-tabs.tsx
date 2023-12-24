"use client";

import { useStorePatientTabs } from "@/hooks";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";

export function PatientTabs() {
  const { patientId: activePatientId } = useParams<{ patientId?: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const { patients, removePatient, setHref } = useStorePatientTabs();

  return (
    <Tabs defaultValue={patients[0]?.id} className="tabs">
      <TabsList aria-label="Patient tabs">
        {patients.map((patient) => (
          <TabsTrigger
            key={patient.id}
            value={patient.id}
            id={`tab-${patient.id}`}
          >
            <span
              onClick={() => {
                if (activePatientId) {
                  if (activePatientId === patient.id) {
                    return;
                  } else {
                    setHref(activePatientId, pathname);
                  }
                }
                router.push(patient.href);
              }}
            >
              {patient.name}
            </span>
            <X
              className="ml-2 h-4 w-4 opacity-60 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab switching when the button is clicked
                removePatient(patient.id);
              }}
            />
          </TabsTrigger>
        ))}
      </TabsList>
      {/* {patients.map((patient) => (
        <TabsContent key={patient.id} value={patient.id}>
          <PatientPanel patient={patient} />
        </TabsContent>
      ))} */}
    </Tabs>
  );
}

// The PatientPanel component should handle the display of each patient's information and side navigation
// interface PatientPanelProps {
//   patient: PatientTypeMock;
// }

// function PatientPanel({ patient }: PatientPanelProps) {
//   // Use react-query to fetch and display patient details if needed

//   // tailwind css
//   return <div className="bg-muted">{patient.name}</div>;
// }
