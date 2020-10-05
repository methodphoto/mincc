import React from 'react';

export default function StatisticsTemplate({ pageContext }) {
  const { html, type, year, title,  } = pageContext;

  return (
    <div>
      <h1>{year} Statistics</h1>
                  
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
};