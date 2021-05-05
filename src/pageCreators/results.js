const path = require(`path`);
const { slugify } = require('../utils/build-utils');

const createResultsPages = (graphql, createPage) => graphql(`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "results" } } }) {
      edges {
        node {
          frontmatter {
            slug
            type
            title
          }
          html
        }
      }
    }
  }`
).then((result) => {
  const ResultsTemplate = path.resolve(`src/templates/resultsTemplate.jsx`);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { html, frontmatter: { type, slug, title, } } = node;

    createPage({
      path: `/${slug}`,
      component: ResultsTemplate,
      context: {
        slug: slug,
        html: html,
        type: type,
        title: title,
      }, 
    });
  });
});

module.exports = {
  createResultsPages,
};