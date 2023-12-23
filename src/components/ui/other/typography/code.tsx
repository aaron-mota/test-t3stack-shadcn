import React from "react";
import {
  Typography,
  type VariantPropsTypographyWithoutVariant,
  type TypographyVariantType,
} from "./_typography_external";
import type { FilterUnionType } from "@/lib/types";

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<TypographyVariantType, "inlineCode">;
type HTMLTypographyElement = React.ElementRef<"code">; // using React.ElementRef<"code"> instead of HTMLXElement because HTMLCodeElement is not a valid HTML element

interface CodeProps
  extends React.HTMLAttributes<HTMLTypographyElement>,
    VariantPropsTypographyWithoutVariant {
  variant?: AllowedVariants;
}

const Code = React.forwardRef<HTMLTypographyElement, CodeProps>(
  ({ variant = "inlineCode", ...props }, ref) => {
    return <Typography ref={ref} variant={variant} {...props} />;
  },
);

export default Code;
