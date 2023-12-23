import React from "react";
import {
  Typography,
  type VariantPropsTypographyWithoutVariant,
  type TypographyVariantType,
} from "./_typography_external";
import type { FilterUnionType } from "@/lib/types";

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<TypographyVariantType, "blockquote">;
type HTMLTypographyElement = HTMLQuoteElement;

export interface BlockquoteProps
  extends React.HTMLAttributes<HTMLTypographyElement>,
    VariantPropsTypographyWithoutVariant {
  variant?: AllowedVariants;
}

const Blockquote = React.forwardRef<HTMLTypographyElement, BlockquoteProps>(
  ({ variant = "blockquote", ...props }, ref) => {
    return <Typography ref={ref} variant={variant} {...props} />;
  },
);

export default Blockquote;
