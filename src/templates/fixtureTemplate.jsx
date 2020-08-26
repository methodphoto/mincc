import React from 'react';

export default function GameTemplate({ pageContext }) {
  const { html, type, year,  } = pageContext;

  return (
    <div>
      <h1>{year} Fixtures</h1>
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
};