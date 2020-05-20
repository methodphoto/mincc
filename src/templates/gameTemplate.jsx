import React from 'react';

export default function GameTemplate({ pageContext }) {
  const { html, game, year } = pageContext;

  return (
    <div>
      <h1>{game}</h1>
      <h4>{year}</h4>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
};
