import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const strongVariants = cva("small", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type SmallElement = React.ElementRef<"small">;
export interface SmallProps
  // extends React.HTMLAttributes<HTMLTypographyElement>,
  extends React.ComponentPropsWithoutRef<"small">,
    VariantProps<typeof strongVariants> {
  asChild?: boolean;
}

const Small = React.forwardRef<SmallElement, SmallProps>(
  ({ children, className, variant, ...props }, ref) => (
    <small
      className={cn(strongVariants({ variant, className }))}
      {...props}
      ref={ref}
    >
      {children}
    </small>
  ),
);
Small.displayName = "Small";

export default Small;
