"use client";

import React from "react";
import { SideNavBase } from "./side-nav-base";
import { siteConfig } from "@/lib/siteConfig";
import { Search } from "lucide-react";

interface Props {}

export function SideNavMain({}: Props) {
  const isCollapsed = false;
  const links = siteConfig.navLinks.sideNavMain!;

  return (
    <>
      <div className={`flex h-full flex-col justify-between pt-2`}>
        <div>
          <div className="m-2 mb-8 flex h-8 items-center justify-end rounded-full bg-muted/60">
            <Search className="mx-2 mr-3 h-4 w-4 text-foreground/20" />
          </div>
          <SideNavBase isCollapsed={isCollapsed} links={links} />
        </div>
        <div className="m-2 h-16 rounded-full bg-muted/60" />
      </div>
    </>
  );
}
