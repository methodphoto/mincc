const path = require(`path`);
const { slugify } = require('../utils/build-utils');

const createGamePages = (graphql, createPage) => graphql(`
  query {
    allMarkdownRemark(filter: { frontmatter: { game: { ne: null} } }) {
      edges {
        node {
          frontmatter {
            game
            year
            slug
          }
          html
        }
      }
    }
  }`
).then((result) => {
  const GameTemplate = path.resolve(`src/templates/gameTemplate.jsx`);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { html, frontmatter: { game, year } } = node;

    createPage({
      path: `${year}/games/${slugify(game)}`,
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
}
