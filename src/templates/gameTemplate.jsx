import React from 'react';
import Layout from "../styles/layout"

export default function GameTemplate({ pageContext }) {
  const { html, game, year, title, gameLocation, gameDate, result, serialNumber, resultType, shortReport,  } = pageContext;

  return (
   <Layout>
    <div>
      <h1>{title}</h1>
      
      <p>Played at {gameLocation} on {gameDate}</p>
      
      <p>{shortReport}</p>
      
      <p><strong>Result:</strong> {result}</p>

                
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
	</Layout>
  );
};