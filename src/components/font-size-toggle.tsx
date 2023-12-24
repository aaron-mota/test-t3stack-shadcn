"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaseSensitive } from "lucide-react";

export function FontSizeToggle() {
  const handleFontSizeChange = (size: string) => {
    document.documentElement.style.setProperty("--base-font-size", size);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="sr-only">Toggle font size</span>
          <CaseSensitive className="h-[1.4rem] w-[1.4rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleFontSizeChange("12px")}>
          Small
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleFontSizeChange("14px")}>
          Medium
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleFontSizeChange("16px")}>
          Large
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
