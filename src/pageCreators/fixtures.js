const path = require(`path`);
const { slugify } = require('../utils/build-utils');

const createFixturePages = (graphql, createPage) => graphql(`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "fixtures" } } }) {
      edges {
        node {
          frontmatter {
            year
            type
          }
          html
        }
      }
    }
  }`
).then((result) => {
  const FixtureTemplate = path.resolve(`src/templates/fixtureTemplate.jsx`);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { html, frontmatter: { type, year, } } = node;

    createPage({
      path: `/${year}/${type}`,
      component: FixtureTemplate,
      context: {
        year: year,
        html: html,
      }, 
    });
  });
});

module.exports = {
  createFixturePages,
};