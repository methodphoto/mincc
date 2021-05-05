import React from 'react';
import Layout from "../styles/layout"

export default function ResultsTemplate({ pageContext }) {
  const { html, type, slug, title,  } = pageContext;

  return (
  	<Layout>
    <div>
      <h1>{title}</h1>
                  
    <div id="results"
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
    </Layout>
  );
};