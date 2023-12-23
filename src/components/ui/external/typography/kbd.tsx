import React from "react";
import Typography, { type TypographyVariant } from "./_typography";
import type { FilterUnionType } from "@/lib/types";

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<TypographyVariant, "kbd">;
type HTMLTypographyElement = React.ElementRef<"kbd">; // using React.ElementRef<"code"> instead of HTMLXElement because HTMLKbdElement is not a valid HTML element

export interface KbdProps extends React.HTMLAttributes<HTMLTypographyElement> {
  variant?: AllowedVariants;
  asChild?: boolean;
}
const Kbd = React.forwardRef<HTMLTypographyElement, KbdProps>(
  ({ variant = "kbd", ...props }, ref) => {
    return (
      <Typography
        // @ts-expect-error (...)
        ref={ref}
        variant={variant}
        {...props}
      />
    );
  },
);

export default Kbd;
