import * as React from "react";
import Typography from "./_typography";
import Heading from "./heading";
import Text from "./text";
import Em from "./em";
import Strong from "./strong";
import Small from "./small";
import Blockquote from "./blockquote";
import Code from "./code";
import Kbd from "./kbd";

const DisplayTypographyVariants = () => {
  return (
    <div className="flex flex-row justify-center gap-6">
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div>
          <Heading variant="h1">Heading 1</Heading>
          <Heading variant="h2">Heading 2</Heading>
          <Heading variant="h3">Heading 3</Heading>
          <Heading variant="h4">Heading 4</Heading>
          <Heading variant="h5">Heading 5</Heading>
          <Heading variant="h6">Heading 6</Heading>
        </div>
        {/* Text */}
        <div>
          <Text variant="lead">This is a lead paragraph.</Text>
          <Text variant="large">This is large text.</Text>
          <Text variant="muted">This is muted text.</Text>
          <div>
            <Text variant="p">This is a paragraph.</Text>
            <Text>This is a paragraph (without a variant prop).</Text>
            <Text>
              This is a paragraph <Em>with em</Em>.
            </Text>
            <Text>
              This is a paragraph <Strong>with strong</Strong>.
            </Text>
            <Text>
              This is a paragraph <Small>with small</Small>.
            </Text>
          </div>
        </div>
        {/* Other*/}
        <div className="flex flex-col items-start">
          <Blockquote>This is a blockquote.</Blockquote>
          <Code>This is inline code.</Code>
          <Kbd>This is kbd.</Kbd>
        </div>
      </div>

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
        {/* <Typography variant="small">This is small text.</Typography> */}
        <Typography variant="muted">This is muted text.</Typography>
        <Typography variant="blockquote">This is a blockquote.</Typography>
        <Typography variant="code">This is inline code.</Typography>
        <Typography variant="ul">
          <Typography variant="li">List item 1</Typography>
          <Typography variant="li">List item 2</Typography>
          <Typography variant="li">List item 3</Typography>
        </Typography>
      </div>
    </div>
  );
};

export default DisplayTypographyVariants;
