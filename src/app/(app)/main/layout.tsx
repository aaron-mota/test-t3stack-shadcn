"use client";

import { SideNavMain } from "@/components/side-nav-main";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div
        className={`h-[calc(100vh - 40px)] fixed bottom-0 left-0 top-[40px] w-[200px]`}
      >
        <SideNavMain />
      </div>
      <div
        className={`ml-[200px] h-screen flex-1 rounded-lg dark:bg-muted/20`}
        // className={`h-screen flex-1 rounded-lg dark:bg-muted/20 ml-[${sideNavWidth}px]`}
      >
        {children}
      </div>
    </div>
  );
}
