export type TypeSystemMapped = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  p: string;
  lead: string;
  large: string;
  muted: string;
  blockquote: string;
  code: string;
  kbd: string;
  ul: string;
  li: string;
};

export const noTypeSystem = {
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
  p: "",
  lead: "",
  large: "",
  muted: "",
  blockquote: "",
  code: "",
  kbd: "",
  ul: "",
  li: "",
};

export const shadcn = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight", // no base in shadcn
  h6: "scroll-m-20 text-base font-semibold tracking-tight", // no base in shadcn
  p: "leading-7 [&:not(:first-child)]:mt-6",
  lead: "text-xl text-muted-foreground",
  blockquote: "border-l-2 pl-6 italic",
  large: "text-lg font-semibold", // div ?
  // small: "text-sm font-medium leading-none", // small ? (this is supposed to be used within another type element)
  muted: "text-sm text-muted-foreground",
  code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  ul: "my-6 ml-6 list-disc [&>li]:mt-2",
  li: "", // m-0 p-0 (not sure where this originally came from)

  // custom
  kbd: "font-mono text-sm font-semibold",
};

export const shadcnMapped: TypeSystemMapped = {
  h1: shadcn.h1,
  h2: shadcn.h2,
  h3: shadcn.h3,
  h4: shadcn.h4,
  h5: shadcn.h5,
  h6: shadcn.h6,
  p: shadcn.p,
  lead: shadcn.lead,
  large: shadcn.large,
  muted: shadcn.muted,
  blockquote: shadcn.blockquote,
  code: shadcn.code,
  kbd: shadcn.kbd,
  ul: shadcn.ul,
  li: shadcn.li,
};

export const materialDesign = {
  v2: {
    // https://m2.material.io/design/typography/the-type-system.html#type-scale
    // Headings
    h1: "text-8xl font-light leading-none tracking-tighter", // Material Design: h1 - Light, 96sp, letter spacing -1.5px
    h2: "text-7xl font-light leading-none tracking-tight", // Material Design: h2 - Light, 60sp, letter spacing -0.5px
    h3: "text-6xl font-normal leading-none tracking-normal", // Material Design: h3 - Regular, 48sp, letter spacing 0px
    h4: "text-5xl font-normal leading-none tracking-wide", // Material Design: h4 - Regular, 34sp, letter spacing 0.25px
    h5: "text-4xl font-normal leading-snug tracking-normal", // Material Design: h5 - Regular, 24sp, letter spacing 0px
    h6: "text-3xl font-medium leading-snug tracking-wide", // Material Design: h6 - Medium, 20sp, letter spacing 0.15px

    // Body Text
    body1: "text-base font-normal leading-relaxed", // body1 - Regular, 16sp, letter spacing 0.5px
    body2: "text-sm font-normal leading-relaxed", // body2 - Regular, 14sp, letter spacing 0.25px

    // Others
    subtitle1: "text-lg font-normal leading-relaxed", // subtitle1 - Regular, 16sp, letter spacing 0.15px
    subtitle2: "text-base font-medium leading-tight", // subtitle2 - Medium, 14sp, letter spacing 0.1px
    button: "text-sm font-medium uppercase leading-none tracking-widest", // button - Medium, 14sp, letter spacing 1.25px
    caption: "text-xs font-normal leading-none", // caption - Regular, 12sp, letter spacing 0.4px
    overline: "text-xs font-normal uppercase leading-none tracking-widest", // overline - Regular, 10sp, letter spacing 1.5px
  },
  v3: {
    // Material Design 3 Typography with Tailwind CSS media query classes
    // https://m3.material.io/styles/typography/overview
    display:
      "text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tighter", // Responsive display typography
    headline:
      "text-4xl md:text-5xl lg:text-6xl font-normal leading-none tracking-wide", // Responsive headline typography
    title:
      "text-xl md:text-2xl lg:text-3xl font-semibold leading-tight tracking-tight", // Responsive title typography
    label:
      "text-sm md:text-base lg:text-lg font-medium leading-tight tracking-wide", // Responsive label typography
    body: "text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-normal", // Responsive body typography
  },
};

export const materialDesignMapped: Record<string, TypeSystemMapped> = {
  v2: {
    h1: materialDesign.v2.h1,
    h2: materialDesign.v2.h2,
    h3: materialDesign.v2.h3,
    h4: materialDesign.v2.h4,
    h5: materialDesign.v2.h5,
    h6: materialDesign.v2.h6,
    p: materialDesign.v2.body1,
    lead: materialDesign.v2.subtitle1,
    large: materialDesign.v2.subtitle2,
    muted: materialDesign.v2.caption,
    blockquote: materialDesign.v2.body1,
    code: materialDesign.v2.body1,
    kbd: materialDesign.v2.body1,
    ul: materialDesign.v2.body2,
    li: materialDesign.v2.body2,
  },
  v3: {
    h1: materialDesign.v3.display,
    h2: materialDesign.v3.headline,
    h3: materialDesign.v3.title,
    h4: materialDesign.v3.label,
    h5: materialDesign.v3.body,
    h6: materialDesign.v3.body,
    p: materialDesign.v3.body,
    lead: materialDesign.v3.body,
    large: materialDesign.v3.body,
    muted: materialDesign.v3.body,
    blockquote: materialDesign.v3.body,
    code: materialDesign.v3.body,
    kbd: materialDesign.v3.body,
    ul: materialDesign.v3.body,
    li: materialDesign.v3.body,
    // ...
  },
};
