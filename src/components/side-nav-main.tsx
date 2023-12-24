"use client";

import React from "react";
import { SideNavBase } from "./side-nav-base";
import { siteConfig } from "@/lib/siteConfig";

interface Props {}

export function SideNavMain({}: Props) {
  const isCollapsed = false;
  const links = siteConfig.navLinks.sideNavMain!;

  return (
    <>
      <div className={`flex h-full flex-col pt-2`}>
        <div className="m-2 mx-3 h-16 rounded-xl bg-muted/60" />
        <SideNavBase isCollapsed={isCollapsed} links={links} />
      </div>
    </>
  );
}
