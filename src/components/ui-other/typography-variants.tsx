import * as React from "react";
import Typography from "./typography";

const TypographyVariants = () => {
  return (
    <div className="">
      <Typography variant="h1" gutterBottom>
        Heading 1
      </Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="p">This is a paragraph.</Typography>
      <Typography>This is a paragraph (without a variant prop).</Typography>
      <Typography variant="lead">This is a lead paragraph.</Typography>
      <Typography variant="large">This is large text.</Typography>
      <Typography variant="small">This is small text.</Typography>
      <Typography variant="muted">This is muted text.</Typography>
      <Typography variant="blockquote">This is a blockquote.</Typography>
      <Typography variant="code">This is inline code.</Typography>
      <Typography variant="ul">
        <Typography variant="li">List item 1</Typography>
        <Typography variant="li">List item 2</Typography>
        <Typography variant="li">List item 3</Typography>
      </Typography>
    </div>
  );
};

export default TypographyVariants;
