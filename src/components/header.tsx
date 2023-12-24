import React from "react";
import { TopNav } from "./top-nav";
import { ModeToggle } from ".";
import Image from "next/image";
import { CompanyLocationUserNav } from "./company-location-user-nav";
import { FontSizeSlider } from "./font-size-slider";

interface Props {}

export function Header({}: Props) {
  return (
    <div id="site-header" className="p-1 px-2">
      <div className="flex justify-between">
        <Logo />
        <TopNav />
        <div className="flex gap-2">
          <CompanyLocationUserNav />
          <div className="flex gap-1">
            {/* <FontSizeToggle /> */}
            <FontSizeSlider />
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

const Logo = () => (
  // <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
  <Image
    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    src="/next.svg"
    alt="Next.js Logo"
    width={80}
    height={37}
    priority
  />
  // </div>
);
