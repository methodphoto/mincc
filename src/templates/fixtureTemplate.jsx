import React from 'react';

export default function FixturesTemplate({ pageContext }) {
  const { html, type, year,  } = pageContext;
  return (
    <div>
      <h1>{game}-{type}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
};