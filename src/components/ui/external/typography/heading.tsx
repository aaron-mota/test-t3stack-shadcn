import React from "react";
import Typography, {
  type TypographyVariant,
  type VariantPropsTypography,
} from "./_typography";
import type { FilterUnionType } from "@/lib/types";

// Specify the variants you want to allow (linting error will be thrown when using exported component with a variant (1) not specified here or (2) not within TypographyVariant)
type AllowedVariants = FilterUnionType<
  TypographyVariant,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;
type HTMLTypographyElement = HTMLHeadingElement;

interface HeadingProps
  extends React.HTMLAttributes<HTMLTypographyElement>,
    VariantPropsTypography {
  variant: AllowedVariants;
}

const Heading = React.forwardRef<HTMLTypographyElement, HeadingProps>(
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

export default Heading;
