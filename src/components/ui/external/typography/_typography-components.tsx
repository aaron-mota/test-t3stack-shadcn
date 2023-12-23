import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "font-sans", // Base font style, replace with actual base styles from Shadcn
  {
    variants: {
      variant: {
        // TODO: look into mt-x for h1-h6 (etc.) (https://ui.shadcn.com/docs/components/typography)
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
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
        "inline-code":
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        ul: "my-6 ml-6 list-disc [&>li]:mt-2",
        li: "m-0 border-t p-0",
      },
      // You can add more styling variants if needed
    },
    defaultVariants: {
      variant: "p", // Set default variant, for example, 'p' for paragraph
    },
  },
);

export interface TypographyH1Props
  extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}
const TypographyH1 = React.forwardRef<HTMLHeadingElement, TypographyH1Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const variant = "h1";
    const Comp = asChild ? Slot : variant;
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export interface TypographyH2Props
  extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}
const TypographyH2 = React.forwardRef<HTMLHeadingElement, TypographyH2Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const variant = "h2";
    const Comp = asChild ? Slot : variant;
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export interface TypographyH3Props
  extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}
const TypographyH3 = React.forwardRef<HTMLHeadingElement, TypographyH3Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const variant = "h3";
    const Comp = asChild ? Slot : variant;
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export interface TypographyH4Props
  extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}
const TypographyH4 = React.forwardRef<HTMLHeadingElement, TypographyH4Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const variant = "h4";
    const Comp = asChild ? Slot : variant;
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export interface TypographyH5Props
  extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}
const TypographyH5 = React.forwardRef<HTMLHeadingElement, TypographyH5Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const variant = "h5";
    const Comp = asChild ? Slot : variant;
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export interface TypographyH6Props
  extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}
const TypographyH6 = React.forwardRef<HTMLHeadingElement, TypographyH6Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const variant = "h6";
    const Comp = asChild ? Slot : variant;
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

// Paragraph Component
export interface TypographyPProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}
const TypographyP = React.forwardRef<HTMLParagraphElement, TypographyPProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const variant = "p";
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

// Lead Component
export interface TypographyLeadProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}
const TypographyLead = React.forwardRef<
  HTMLParagraphElement,
  TypographyLeadProps
>(({ className, asChild = false, ...props }, ref) => {
  const variant = "lead";
  const Comp = asChild ? Slot : "p"; // Using 'p' tag for 'lead' variant
  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

// Large Component
export interface TypographyLargeProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}
const TypographyLarge = React.forwardRef<
  HTMLParagraphElement,
  TypographyLargeProps
>(({ className, asChild = false, ...props }, ref) => {
  const variant = "large";
  const Comp = asChild ? Slot : "p"; // Using 'p' tag for 'large' variant
  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

// Small Component
// NOTE: no matching HTMLXElement
export interface TypographySmallProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}
const TypographySmall = React.forwardRef<
  HTMLParagraphElement,
  TypographySmallProps
>(({ className, asChild = false, ...props }, ref) => {
  const variant = "small";
  const Comp = asChild ? Slot : "small";
  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

// Muted Component
export interface TypographyMutedProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
}
const TypographyMuted = React.forwardRef<
  HTMLParagraphElement,
  TypographyMutedProps
>(({ className, asChild = false, ...props }, ref) => {
  const variant = "muted";
  const Comp = asChild ? Slot : "p"; // Using 'span' tag for 'muted' variant
  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

// Blockquote Component
export interface TypographyBlockquoteProps
  extends React.HTMLAttributes<HTMLQuoteElement> {
  asChild?: boolean;
}
const TypographyBlockquote = React.forwardRef<
  HTMLQuoteElement,
  TypographyBlockquoteProps
>(({ className, asChild = false, ...props }, ref) => {
  const variant = "blockquote";
  const Comp = asChild ? Slot : "blockquote";
  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

// Inline Code Component
export interface TypographyInlineCodeProps
  extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}
const TypographyInlineCode = React.forwardRef<
  HTMLElement,
  TypographyInlineCodeProps
>(({ className, asChild = false, ...props }, ref) => {
  const variant = "inline-code";
  const Comp = asChild ? Slot : "code";
  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});

// Unordered List Component
export interface TypographyUlProps
  extends React.HTMLAttributes<HTMLUListElement> {
  asChild?: boolean;
}
const TypographyUl = React.forwardRef<HTMLUListElement, TypographyUlProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const variant = "ul";
    const Comp = asChild ? Slot : "ul";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

// List Item Component
export interface TypographyLiProps extends React.HTMLAttributes<HTMLLIElement> {
  asChild?: boolean;
}
const TypographyLi = React.forwardRef<HTMLLIElement, TypographyLiProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const variant = "li";
    const Comp = asChild ? Slot : "li";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyUl,
  TypographyLi,
};

// interface HTMLElement extends Element {}
// interface HTMLAnchorElement extends HTMLElement {}
// interface HTMLAreaElement extends HTMLElement {}
// interface HTMLAudioElement extends HTMLElement {}
// interface HTMLBaseElement extends HTMLElement {}
// interface HTMLBodyElement extends HTMLElement {}
// interface HTMLBRElement extends HTMLElement {}
// interface HTMLButtonElement extends HTMLElement {}
// interface HTMLCanvasElement extends HTMLElement {}
// interface HTMLDataElement extends HTMLElement {}
// interface HTMLDataListElement extends HTMLElement {}
// interface HTMLDetailsElement extends HTMLElement {}
// interface HTMLDialogElement extends HTMLElement {}
// interface HTMLDivElement extends HTMLElement {}
// interface HTMLDListElement extends HTMLElement {}
// interface HTMLEmbedElement extends HTMLElement {}
// interface HTMLFieldSetElement extends HTMLElement {}
// interface HTMLFormElement extends HTMLElement {}
// interface HTMLHeadingElement extends HTMLElement {}
// interface HTMLHeadElement extends HTMLElement {}
// interface HTMLHRElement extends HTMLElement {}
// interface HTMLHtmlElement extends HTMLElement {}
// interface HTMLIFrameElement extends HTMLElement {}
// interface HTMLImageElement extends HTMLElement {}
// interface HTMLInputElement extends HTMLElement {}
// interface HTMLModElement extends HTMLElement {}
// interface HTMLLabelElement extends HTMLElement {}
// interface HTMLLegendElement extends HTMLElement {}
// interface HTMLLIElement extends HTMLElement {}
// interface HTMLLinkElement extends HTMLElement {}
// interface HTMLMapElement extends HTMLElement {}
// interface HTMLMetaElement extends HTMLElement {}
// interface HTMLMeterElement extends HTMLElement {}
// interface HTMLObjectElement extends HTMLElement {}
// interface HTMLOListElement extends HTMLElement {}
// interface HTMLOptGroupElement extends HTMLElement {}
// interface HTMLOptionElement extends HTMLElement {}
// interface HTMLOutputElement extends HTMLElement {}
// interface HTMLParagraphElement extends HTMLElement {}
// interface HTMLParamElement extends HTMLElement {}
// interface HTMLPreElement extends HTMLElement {}
// interface HTMLProgressElement extends HTMLElement {}
// interface HTMLQuoteElement extends HTMLElement {}
// interface HTMLSlotElement extends HTMLElement {}
// interface HTMLScriptElement extends HTMLElement {}
// interface HTMLSelectElement extends HTMLElement {}
// interface HTMLSourceElement extends HTMLElement {}
// interface HTMLSpanElement extends HTMLElement {}
// interface HTMLStyleElement extends HTMLElement {}
// interface HTMLTableElement extends HTMLElement {}
// interface HTMLTableColElement extends HTMLElement {}
// interface HTMLTableDataCellElement extends HTMLElement {}
// interface HTMLTableHeaderCellElement extends HTMLElement {}
// interface HTMLTableRowElement extends HTMLElement {}
// interface HTMLTableSectionElement extends HTMLElement {}
// interface HTMLTemplateElement extends HTMLElement {}
// interface HTMLTextAreaElement extends HTMLElement {}
// interface HTMLTimeElement extends HTMLElement {}
// interface HTMLTitleElement extends HTMLElement {}
// interface HTMLTrackElement extends HTMLElement {}
// interface HTMLUListElement extends HTMLElement {}
// interface HTMLVideoElement extends HTMLElement {}
// interface HTMLWebViewElement extends HTMLElement {}
