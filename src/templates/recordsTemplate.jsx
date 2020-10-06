import React from 'react';

export default function RecordsTemplate({ pageContext }) {
  const { html, type, slug, title,  } = pageContext;

  return (
    <div>
      <h1>{title}</h1>
                  
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
  );
};