import { SideNavMain } from "@/components/side-nav-main";
import React from "react";

const sideNavWidth = 240;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full overflow-hidden">
      <div
        className={`w-[${sideNavWidth}px] h-full overflow-y-auto`}
        // className={`h-[calc(100vh-40px)] fixed bottom-0 left-0 top-[40px] w-[200px]`} // absolute
      >
        <SideNavMain />
      </div>
      <div
        className="h-screen max-w-full flex-1 overflow-y-auto rounded-lg bg-muted p-4 dark:bg-muted/20"
        // className={`ml-[200px] h-screen flex-1 rounded-lg dark:bg-muted/20`} // absolute
        // className={`h-screen flex-1 rounded-lg dark:bg-muted/20 ml-[${sideNavWidth}px]`}
      >
        {children}
      </div>
    </div>
  );
}
