import React from 'react';

export default function GameTemplate({ pageContext }) {
  const { html, game, year, title, gameLocation, gameDate, result, serialNumber, resultType, shortReport,  } = pageContext;

  return (
    <div>
      <h1>{title}</h1>
      
      <p>Played at {gameLocation} on {gameDate}</p>
      
      <p>{shortReport}</p>
      
      <p><strong>Result:</strong> {result}</p>

                
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
};