import React from 'react';

export default function GameTemplate({ pageContext }) {
  const { html, game, year } = pageContext;

  return (
    <div>
      <h1>{game}</h1>
      <p><a href="{year}">{year}</a>/{game}</p>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
};
