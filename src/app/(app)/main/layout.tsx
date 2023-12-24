"use client";

import { SideNavMain } from "@/components/side-nav-main";
import React from "react";

const sideNavWidth = "w-60";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className={sideNavWidth}>
        <SideNavMain />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
