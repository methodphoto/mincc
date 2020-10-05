const path = require(`path`);
const { slugify } = require('../utils/build-utils');

const createStatisticsPages = (graphql, createPage) => graphql(`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "statistics" } } }) {
      edges {
        node {
          frontmatter {
            year
            type
            title
          }
          html
        }
      }
    }
  }`
).then((result) => {
  const StatisticsTemplate = path.resolve(`src/templates/statisticsTemplate.jsx`);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { html, frontmatter: { type, year, title, } } = node;

    createPage({
      path: `/${year}/${type}`,
      component: StatisticsTemplate,
      context: {
        year: year,
        html: html,
        type: type,
        title: title,
      }, 
    });
  });
});

module.exports = {
  createStatisticsPages,
};