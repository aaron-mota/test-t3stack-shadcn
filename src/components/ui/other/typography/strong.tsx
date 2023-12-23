import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const strongVariants = cva("strong", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type StrongElement = React.ElementRef<"strong">;
export interface StrongProps
  // extends React.HTMLAttributes<HTMLTypographyElement>,
  extends React.ComponentPropsWithoutRef<"strong">,
    VariantProps<typeof strongVariants> {
  asChild?: boolean;
}

const Strong = React.forwardRef<StrongElement, StrongProps>(
  ({ children, className, variant, ...props }, ref) => (
    <strong
      className={cn(strongVariants({ variant, className }))}
      {...props}
      ref={ref}
    >
      {children}
    </strong>
  ),
);
Strong.displayName = "Strong";

export default Strong;
