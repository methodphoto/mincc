import React from 'react';
import Layout from "../styles/layout"

export default function FixtureTemplate({ pageContext }) {
  const { html, type, year,  } = pageContext;

  return (
  	<Layout>
    	<div id="{type}">
     		<h1>{year} Fixtures</h1>
                  
    	<div id="{type}"
      			dangerouslySetInnerHTML={{ __html: html }}
    		/>
    	</div>
    </Layout>
  );
};