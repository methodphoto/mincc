import React from 'react';
import Layout from "../layouts/layout"

export default function FixtureTemplate({ pageContext }) {
  const { html, type, year,  } = pageContext;

  return (
  	<Layout>
    	<div>
     		<h1>{year} Fixtures</h1>
                  
    	<div
      			dangerouslySetInnerHTML={{ __html: html }}
    		/>
    	</div>
    </Layout>
  );
};