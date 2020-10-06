const path = require(`path`);
const { slugify } = require('../utils/build-utils');

const createRecordsPages = (graphql, createPage) => graphql(`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "statistics" } } }) {
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
  const RecordsTemplate = path.resolve(`src/templates/recordsTemplate.jsx`);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { html, frontmatter: { type, slug, title, } } = node;

    createPage({
      path: `/${slug}`,
      component: RecordsTemplate,
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
  createRecordsPages,
};