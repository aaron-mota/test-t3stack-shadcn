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
      <div className={`flex flex-col justify-between`}>
        <div className="m-2 h-10 rounded-md bg-muted/80" />
        <SideNavBase isCollapsed={isCollapsed} links={links} />
        <div className="m-2 h-10 rounded-md bg-muted/80" />
      </div>
    </>
  );
}
