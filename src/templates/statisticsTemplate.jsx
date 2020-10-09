import React from 'react';
import Layout from "../layouts/layout"

export default function StatisticsTemplate({ pageContext }) {
  const { html, type, year, title,  } = pageContext;

  return (
  	<Layout>
    <div>
      <h1>{year} Statistics</h1>
                  
    <div
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </div>
    </Layout>
  );
};