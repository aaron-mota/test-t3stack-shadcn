import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("font-sans", {
  variants: {
    variant: {
      // TODO: look into mt-x for h1-h6, etc. (used in shadcn example)
      // Tailwind CSS classes below are from shadcn typography section (https://ui.shadcn.com/docs/components/typography)
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7",
      // p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      // small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      // blockquote: "mt-6 border-l-2 pl-6 italic",
      blockquote: "border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      li: "m-0 p-0",
      // add more typography variants...
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
