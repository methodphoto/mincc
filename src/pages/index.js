import React from 'react';
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
  	<>
  		<h1>{year} Fixtures</h1>

    	<div dangerouslySetInnerHTML={{ __html: html }} />
    	
    	<hr />
    	
		<h2>Previous years</h2>

            <h3>2010s</h3>
                <p><a href="2019/fixtures">2019 Fixtures</a></p>
                <p><a href="2018/fixtures">2018 Fixtures</a></p>
                <p><a href="2017/fixtures">2017 Fixtures</a></p>
            <h3>1908s</h3>
                <p><a href="1986/fixtures">1986 Fixtures</a></p>
                <p><a href="1985/fixtures">1985 Fixtures</a></p>
                <p><a href="1984/fixtures">1984 Fixtures</a></p>
                <p><a href="1983/fixtures">1983 Fixtures</a></p>
                <p><a href="1982/fixtures">1982 Fixtures</a></p>
	</>
  );
};
export default HomePage;
