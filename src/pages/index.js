import React from 'react';
//import Layout from "../layouts/layout"
import Layout from "../styles/layout"
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "//2021/fixtures.md$/"}}) {
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

    	<div id="fixtures" dangerouslySetInnerHTML={{ __html: html }} />
    	
    	<hr />
    	  	
		<h2>Previous years</h2>
		
		<h3>2020s</h3>
			<p><a href="2021/fixtures">2021 Fixtures</a></p>
        	<p><a href="2020/fixtures">2020 Fixtures</a></p>
         <h3>2010s</h3>
        	<p><a href="2019/fixtures">2019 Fixtures</a></p>
        	<p><a href="2018/fixtures">2018 Fixtures</a></p>
        	<p><a href="2017/fixtures">2017 Fixtures</a></p>
         <h3>1980s</h3>
        	<p><a href="1987/fixtures">1987 Fixtures</a></p>
        	<p><a href="1986/fixtures">1986 Fixtures</a></p>
        	<p><a href="1985/fixtures">1985 Fixtures</a></p>
        	<p><a href="1984/fixtures">1984 Fixtures</a></p>
        	<p><a href="1983/fixtures">1983 Fixtures</a></p>
        	<p><a href="1982/fixtures">1982 Fixtures</a></p>
                
        <h2>Statistics</h2>
          <h3>2020s</h3>
            <p><a href="2020/statistics">2020 Statistics</a></p>
          <h3>2010s</h3>
        	<p><a href="2019/statistics">2019 Statistics</a></p>
        	<p><a href="2018/statistics">2018 Statistics</a></p>
        	<p><a href="2017/statistics">2017 Statistics</a></p>
        	<p><a href="2016/statistics">2016 Statistics</a></p>
        	<p><a href="2015/statistics">2015 Statistics</a></p>
        	<p><a href="2014/statistics">2014 Statistics</a></p>
        	<p><a href="2013/statistics">2013 Statistics</a></p>
        	<p><a href="2012/statistics">2012 Statistics</a></p>
        	<p><a href="2011/statistics">2011 Statistics</a></p>
           	<p><a href="2000/statistics">2010 Statistics</a></p>
          <h3>2000s</h3>
        	<p><a href="2009/statistics">2009 Statistics</a></p>
        	<p><a href="2008/statistics">2008 Statistics</a></p>
        	<p><a href="2007/statistics">2007 Statistics</a></p>
        	<p><a href="2006/statistics">2006 Statistics</a></p>
        	<p><a href="2005/statistics">2005 Statistics</a></p>
        	<p><a href="2004/statistics">2004 Statistics</a></p>
        	<p><a href="2003/statistics">2003 Statistics</a></p>
        	<p><a href="2002/statistics">2002 Statistics</a></p>
        	<p><a href="2001/statistics">2001 Statistics</a></p>
        	<p><a href="2000/statistics">2000 Statistics</a></p>
          <h3>1990s</h3>
        	<p><a href="1999/statistics">1999 Statistics</a></p>
        	<p><a href="1998/statistics">1998 Statistics</a></p>
        	<p><a href="1997/statistics">1997 Statistics</a></p>
        	<p><a href="1996/statistics">1996 Statistics</a></p>
        	<p><a href="1995/statistics">1995 Statistics</a></p>
        	<p><a href="1994/statistics">1994 Statistics</a></p>
        	<p><a href="1993/statistics">1993 Statistics</a></p>
        	<p><a href="1992/statistics">1992 Statistics</a></p>
        	<p><a href="1991/statistics">1991 Statistics</a></p> 
        	<p><a href="1990/statistics">1990 Statistics</a></p> 
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
