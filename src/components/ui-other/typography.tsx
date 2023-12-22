import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva(
  // Base font styles and variants
  "font-sans",
  {
    variants: {
      variant: {
        // TODO: look into mt-x for h1-h6 (etc.) (https://ui.shadcn.com/docs/components/typography)
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        h5: "scroll-m-20 text-lg font-semibold tracking-tight",
        h6: "scroll-m-20 text-base font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-6",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",
        blockquote: "mt-6 border-l-2 pl-6 italic",
        code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        ul: "my-6 ml-6 list-disc [&>li]:mt-2",
        li: "m-0 p-0",
      },
      gutterBottom: {
        true: "mb-4",
      },
    },
    defaultVariants: {
      variant: "p",
      gutterBottom: false,
    },
  },
);

// Define a mapping from variants to HTML element types
const VariantToElementText = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  lead: "p",
  large: "p",
  small: "small",
  muted: "p",
  blockquote: "blockquote",
  code: "code",
  ul: "ul",
  li: "li",
  // ... other mappings
};

type VariantToElement = {
  h1: JSX.IntrinsicElements["h1"];
  h2: JSX.IntrinsicElements["h2"];
  h3: JSX.IntrinsicElements["h3"];
  h4: JSX.IntrinsicElements["h4"];
  h5: JSX.IntrinsicElements["h5"];
  h6: JSX.IntrinsicElements["h6"];
  p: JSX.IntrinsicElements["p"];
  lead: JSX.IntrinsicElements["p"];
  large: JSX.IntrinsicElements["p"];
  small: JSX.IntrinsicElements["small"];
  muted: JSX.IntrinsicElements["p"];
  blockquote: JSX.IntrinsicElements["blockquote"];
  // "inline-code": JSX.IntrinsicElements["code"];
  code: JSX.IntrinsicElements["code"];
  ul: JSX.IntrinsicElements["ul"];
  li: JSX.IntrinsicElements["li"];
  // ... other mappings
};
type VariantToElementUnion = VariantToElement[keyof VariantToElement];

// Define a type for all your variants
type TypographyVariant = keyof VariantToElement;

// Utility type to get HTML element from variant
type ElementFromVariant<V extends TypographyVariant> = VariantToElement[V];

// Props for the Typography component
export interface TypographyProps<V extends TypographyVariant>
  extends Omit<React.HTMLAttributes<ElementFromVariant<V>>, "as">, // not sure what omitting 'as' is for
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  variant: V;
}

export const Typography = React.forwardRef<
  VariantToElementUnion,
  TypographyProps<TypographyVariant>
>(({ className, variant, gutterBottom, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : VariantToElementText[variant] ?? "p";
  return (
    <Comp
      className={cn(typographyVariants({ variant, gutterBottom, className }))}
      // @ts-expect-error (...)
      ref={ref}
      {...props}
    />
  );
});

Typography.displayName = "Typography";

export default Typography;
