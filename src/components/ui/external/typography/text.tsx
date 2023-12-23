import React from "react";
import Typography, { type TypographyVariant } from "./_typography";
import type { FilterUnionType } from "@/lib/types";

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<
  TypographyVariant,
  "p" | "lead" | "large" | "muted"
>;
type HTMLTypographyElement = HTMLParagraphElement;

export interface TextProps extends React.HTMLAttributes<HTMLTypographyElement> {
  variant?: AllowedVariants;
  asChild?: boolean;
}
const Text = React.forwardRef<HTMLTypographyElement, TextProps>(
  ({ variant, ...props }, ref) => {
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

export default Text;
