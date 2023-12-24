import React from "react";
import { SideNavBase } from "./side-nav-base";
import { siteConfig } from "@/lib/siteConfig";

interface Props {}

export function SideNavMain({}: Props) {
  const isCollapsed = false;
  const links = siteConfig.navLinks.sideNavMain!;

  return (
    <>
      <SideNavBase isCollapsed={isCollapsed} links={links} />
    </>
  );
}
