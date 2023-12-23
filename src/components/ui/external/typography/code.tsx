import React from "react";
import Typography from "./_typography";
import type { TypographyVariant, VariantPropsTypography } from "./_typography";
import type { FilterUnionType } from "@/lib/types";

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<TypographyVariant, "code">;
type HTMLTypographyElement = React.ElementRef<"code">; // using React.ElementRef<"code"> instead of HTMLXElement because HTMLCodeElement is not a valid HTML element

interface CodeProps
  extends React.HTMLAttributes<HTMLTypographyElement>,
    VariantPropsTypography {
  variant?: AllowedVariants;
}

const Code = React.forwardRef<HTMLTypographyElement, CodeProps>(
  ({ variant = "code", ...props }, ref) => {
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

export default Code;
