import React from 'react';

export default function GameTemplate({ pageContext }) {
  const { html, game, year, title, gameLocation, gameDate, result, serialNumber, resultType,  } = pageContext;

  return (
    <div>
      <h1>{game}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
};