import { SideNavMain } from "@/components/side-nav-main";
import React from "react";

const sideNavWidth = 240;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full overflow-hidden">
      <div className={`w-[${sideNavWidth}px] h-full overflow-y-auto`}>
        <SideNavMain />
      </div>
      <div className="h-screen max-w-full flex-1 overflow-y-auto rounded-lg bg-muted p-4 dark:bg-muted/20">
        {children}
      </div>
    </div>
  );
}
