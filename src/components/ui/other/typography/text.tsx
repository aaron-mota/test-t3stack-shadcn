import React from "react";
import {
  Typography,
  type VariantPropsTypographyWithoutVariant,
  type TypographyVariantType,
} from "./_typography_external";
import type { FilterUnionType } from "@/lib/types";

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<
  TypographyVariantType,
  "p" | "lead" | "largeText" | "mutedText"
>;
type HTMLTypographyElement = HTMLParagraphElement;

interface TextProps
  extends React.HTMLAttributes<HTMLTypographyElement>,
    VariantPropsTypographyWithoutVariant {
  variant?: AllowedVariants;
}

export const Text = React.forwardRef<HTMLTypographyElement, TextProps>(
  ({ variant, ...props }, ref) => {
    return <Typography ref={ref} variant={variant} {...props} />;
  },
);
