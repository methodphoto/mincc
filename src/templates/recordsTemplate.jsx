import React from 'react';
import Layout from "../layouts/layout"

export default function RecordsTemplate({ pageContext }) {
  const { html, type, slug, title,  } = pageContext;

  return (
  	<Layout>
    <div>
      <h1>{title}</h1>
                  
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
    </Layout>
  );
};