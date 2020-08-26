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
            title
            gameLocation
            shortReport
            result
            gameDate
          }
          html
        }
      }
    }
  }`
).then((result) => {
  const GameTemplate = path.resolve(`src/templates/gameTemplate.jsx`);

  const filtered = result.data.allMarkdownRemark.edges.filter(({ node }) => {
    const { frontmatter: { year } } = node;
    return parseInt(year, 10) < 1987 || parseInt(year, 10) > 2018;
  });

  filtered.forEach(({ node }) => {
    const { html, frontmatter: { game, year, title, gameLocation, shortReport, result, gameDate,  } } = node;

    createPage({
      path: `/${year}/${year}-${slugify(game)}`,
      component: GameTemplate,
      context: {
        game: game,
        year: year,
        html: html,
        title: title,
        gameLocation: gameLocation,
        shortReport: shortReport,
        result: result,
        gameDate: gameDate,
      }, 
    });
  });
});

module.exports = {
  createGamePages,
};