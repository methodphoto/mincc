const path = require(`path`);
const { slugify } = require('../utils/build-utils');

const createGamePages = (graphql, createPage) =>
  graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "fixtures" } } }) {
        edges {
          node {
            frontmatter {
              game
              year
            }
            html
          }
        }
      }
    }
  `).then((result) => {
    const GameTemplate = path.resolve(`src/templates/fixtureTemplateTemplate.jsx`);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { html, frontmatter: { game, year, slug } } = node;

      createPage({
        path: `/${year}-$type`,,
        component: GameTemplate,
        context: {
          game: game,
          year: year,
          html: html,
        },
      });
    });
  });

module.exports = {
  createGamePages,
};
