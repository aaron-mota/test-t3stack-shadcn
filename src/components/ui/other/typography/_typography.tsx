import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { shadcnMapped, type TypeSystemMapped } from "./_type_systems";

const typeSystemBase = shadcnMapped;
const custom: TypeSystemMapped = {
  h1: "",
  h2: "border-b-0 pb-0", // reset: border-b pb-2 first:mt-0
  h3: "",
  h4: "",
  h5: "", // no base in shadcn
  h6: "", // no base in shadcn
  p: "[&:not(:first-child)]:mt-0", // reset: [&:not(:first-child)]:mt-6
  lead: "",
  large: "",
  muted: "test-base", // reset: test-sm
  blockquote: "border-l-4 border-primary-300",
  code: "",
  kbd: "",
  ul: "",
  li: "",
};

export const typographyVariants = cva("font-sans", {
  variants: {
    variant: {
      // TODO: look into mt-x for h1-h6, etc. (used in shadcn example)
      // Tailwind CSS classes below are from shadcn typography section (https://ui.shadcn.com/docs/components/typography)
      h1: cn(typeSystemBase.h1, custom.h1),
      h2: cn(typeSystemBase.h2, custom.h2),
      h3: cn(typeSystemBase.h3, custom.h3),
      h4: cn(typeSystemBase.h4, custom.h4),
      h5: cn(typeSystemBase.h5, custom.h5),
      h6: cn(typeSystemBase.h6, custom.h6),
      p: cn(typeSystemBase.p, custom.p),
      lead: cn(typeSystemBase.lead, custom.lead),
      large: cn(typeSystemBase.large, custom.large),
      muted: cn(typeSystemBase.muted, custom.muted),
      blockquote: cn(typeSystemBase.blockquote, custom.blockquote),
      code: cn(typeSystemBase.code, custom.code),
      kbd: cn(typeSystemBase.kbd, custom.kbd),
      ul: cn(typeSystemBase.ul, custom.ul),
      li: cn(typeSystemBase.li, custom.li),
    },
    gutterBottom: {
      // inspiration from MUI (https://mui.com/material-ui/api/typography/)
      true: "mb-4",
    },
  },
  defaultVariants: {
    variant: "p",
    gutterBottom: false,
    // size: "default",
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
};
type HTMLTypographyElement =
  JSX.IntrinsicElements[(typeof VariantToHTMLElement)[keyof typeof VariantToHTMLElement]];

export interface TypographyProps
  extends React.HTMLAttributes<HTMLTypographyElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

export interface VariantPropsTypography
  extends Omit<VariantProps<typeof typographyVariants>, "variant"> {
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
