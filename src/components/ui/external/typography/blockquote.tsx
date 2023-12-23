import React from "react";
import Typography, { type TypographyVariant } from "./_typography";
import type { FilterUnionType } from "@/lib/types";

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<TypographyVariant, "blockquote">;
type HTMLTypographyElement = HTMLQuoteElement;

export interface BlockquoteProps
  extends React.HTMLAttributes<HTMLTypographyElement> {
  variant?: AllowedVariants;
  asChild?: boolean;
}
const Blockquote = React.forwardRef<HTMLTypographyElement, BlockquoteProps>(
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

export default Blockquote;
