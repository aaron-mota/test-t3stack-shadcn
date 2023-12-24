import { SideNavMain } from "@/components/side-nav-main";
import React from "react";
import { PatientTabs } from "./_components/patient-tabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-hidden">
      <div className="p-2">
        <PatientTabs />
      </div>
      <div className="flex">
        <div className={`w-[240px] overflow-y-auto`}>
          <SideNavMain />
        </div>
        <div className="flex h-screen max-w-full flex-1 flex-col overflow-y-auto">
          <div className="flex-1 rounded-lg bg-muted p-4 dark:bg-muted/20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
