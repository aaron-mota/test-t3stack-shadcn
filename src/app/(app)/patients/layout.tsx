import { SideNavMain } from "@/components/side-nav-main";
import React from "react";
import { PatientTabs } from "./_components/patient-tabs";

const sideNavWidth = 240;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full overflow-hidden">
      <div className={`w-[${sideNavWidth}px] overflow-y-auto`}>
        <SideNavMain />
      </div>
      <div className="flex h-screen max-w-full flex-1 flex-col overflow-y-auto">
        <div className="p-4">
          <PatientTabs />
        </div>
        <div className="flex-1 rounded-lg bg-muted p-4 dark:bg-muted/20">
          {children}
        </div>
      </div>
    </div>
  );
}
