"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "./ui/slider";
import { CaseSensitive } from "lucide-react";
import { Input } from ".";

export function FontSizeSlider() {
  const [value, setValue] = useState<number[] | undefined>(undefined);

  const handleFontSizeChange = (sizeArray: [number]) => {
    document.documentElement.style.setProperty(
      "--base-font-size",
      `${sizeArray.at(0)}px`,
    );
    setValue(sizeArray);
  };

  useEffect(() => {
    const baseFontSize = getComputedStyle(
      document.documentElement,
    ).getPropertyValue("--base-font-size");
    if (baseFontSize) {
      const fontSizeWithoutPx = parseInt(baseFontSize, 10);
      if (!isNaN(fontSizeWithoutPx)) {
        setValue([fontSizeWithoutPx]);
      }
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="sr-only">Toggle font size</span>
          <CaseSensitive className="h-[1.4rem] w-[1.4rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-4">
        <div className="flex w-[200px] gap-2">
          <Slider
            min={10}
            max={24}
            step={1}
            defaultValue={[16]}
            value={value ?? [16]}
            onValueChange={handleFontSizeChange}
          />
          <Input className="w-[3rem]" value={value?.at(0)} disabled />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
