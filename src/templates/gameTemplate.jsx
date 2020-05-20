import React from 'react';
import { graphql } from 'gatsby';

export default function GameTemplate({
  data: { markdownRemark }
}) {
  console.log('RENDERING >>>>>')
  const { html, frontmatter } = markdownRemark;

  return (
    <div>
      <h1>{frontmatter.game}</h1>
      <h4>{frontmatter.year}</h4>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
};
