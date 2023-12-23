// Helper type to filter union types
export type FilterUnionType<T, U> = T extends U ? T : never;
// // Specify the variants you want to allow
// type AllowedVariants = Filter<
//   TypographyVariant,
//   "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
// >;
