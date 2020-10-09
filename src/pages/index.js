import React from 'react';
import Layout from "../layouts/layout"
import { graphql, useStaticQuery } from 'gatsby';
const query = graphql`
  query {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//2020/fixtures.md$/"}}) {
    edges {
      node {
        id
        html
        frontmatter {
          type
          year
        }
      }
    }
  }
}
`;
const HomePage = () => {
  const data = useStaticQuery(query);
  const FixturesData = data.allMarkdownRemark.edges[0];
  const {
    node: {
      html,
      frontmatter: {
        type,
        year,
      },
    },
  } = FixturesData;
  return (
  	<Layout>
  		<h1>{year} Fixtures</h1>

    	<div dangerouslySetInnerHTML={{ __html: html }} />
    	
    	<hr />
    	
		<h2>Previous years</h2>
		
            <h3>2010s</h3>
                <p><a href="2019/fixtures">2019 Fixtures</a></p>
                <p><a href="2018/fixtures">2018 Fixtures</a></p>
                <p><a href="2017/fixtures">2017 Fixtures</a></p>
            <h3>1980s</h3>
                <p><a href="1986/fixtures">1986 Fixtures</a></p>
                <p><a href="1985/fixtures">1985 Fixtures</a></p>
                <p><a href="1984/fixtures">1984 Fixtures</a></p>
                <p><a href="1983/fixtures">1983 Fixtures</a></p>
                <p><a href="1982/fixtures">1982 Fixtures</a></p>
                
        <h2>Statistics</h2>
          <h3>2010s</h3>
        	<p><a href="2020/statistics">2020 Statistics</a></p>
        	<p><a href="2019/statistics">2019 Statistics</a></p>
        	<p><a href="2018/statistics">2018 Statistics</a></p>
        	<p><a href="2017/statistics">2017 Statistics</a></p>
           <h3>1980s</h3>
           	<p><a href="1989/statistics">1989 Statistics</a></p>
           	<p><a href="1988/statistics">1988 Statistics</a></p>
           	<p><a href="1987/statistics">1987 Statistics</a></p>
        	<p><a href="1986/statistics">1986 Statistics</a></p>
        	<p><a href="1985/statistics">1985 Statistics</a></p>
        	<p><a href="1984/statistics">1984 Statistics</a></p>
        	<p><a href="1983/statistics">1983 Statistics</a></p>
        	<p><a href="1982/statistics">1982 Statistics</a></p>
        	
        	
      <h2>Records</h2>
        
        	<p><a href="/results">Results</a></p>
        	<p><a href="/season">Results by Season</a></p>	
        	<p><a href="/honours-board-batting">Batting Honours Board</a></p>
        	<p><a href="/honours-board-bowling">Bowling Honours Board</a></p>
	</Layout>
  );
};
export default HomePage;
