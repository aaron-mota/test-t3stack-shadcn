import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { shadcnMapped } from "./_type_systems";

const typeSystem = shadcnMapped;

const typographyVariants = cva("font-sans", {
  variants: {
    variant: {
      // TODO: look into mt-x for h1-h6, etc. (used in shadcn example)
      // Tailwind CSS classes below are from shadcn typography section (https://ui.shadcn.com/docs/components/typography)
      h1: typeSystem.h1,
      h2: typeSystem.h2,
      h3: typeSystem.h3,
      h4: typeSystem.h4,
      h5: typeSystem.h5,
      h6: typeSystem.h6,
      p: typeSystem.p,
      lead: typeSystem.lead,
      large: typeSystem.large,
      muted: typeSystem.muted,
      blockquote: typeSystem.blockquote,
      code: typeSystem.code,
      kbd: typeSystem.kbd,
      ul: typeSystem.ul,
      li: typeSystem.li,
    },
    gutterBottom: {
      // inspiration from MUI (https://mui.com/material-ui/api/typography/)
      true: "mb-4",
    },
    // add more variants...
  },
  defaultVariants: {
    variant: "p",
    gutterBottom: false,
  },
});

export type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

// only allow typography-related HTML elements
type HTMLTypographyElementTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  // | "small"
  | "blockquote"
  | "code"
  | "kbd"
  | "ul"
  | "li";
const VariantToHTMLElement: Record<
  TypographyVariant,
  HTMLTypographyElementTag
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  lead: "p",
  large: "p",
  // small: "small",
  muted: "p",
  blockquote: "blockquote",
  code: "code",
  kbd: "kbd",
  ul: "ul",
  li: "li",

  // MUI
  // subtitle1: "p",
  // subtitle2: "p",
  // button: "p",
  // caption: "p",
  // overline: "p",
};
type HTMLTypographyElement =
  JSX.IntrinsicElements[(typeof VariantToHTMLElement)[keyof typeof VariantToHTMLElement]];

export interface TypographyProps
  extends React.HTMLAttributes<HTMLTypographyElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

export const Typography = React.forwardRef<
  HTMLTypographyElement,
  TypographyProps
>(({ className, variant, gutterBottom, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : VariantToHTMLElement[variant ?? "p"];
  return (
    <Comp
      className={cn(typographyVariants({ variant, gutterBottom, className }))}
      // @ts-expect-error (difficult to type this)
      ref={ref}
      {...props}
    />
  );
});

Typography.displayName = "Typography";

export default Typography;
