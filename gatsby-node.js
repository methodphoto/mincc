const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const GameTemplate = path.resolve(`src/templates/gameTemplate.jsx`);

  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { game: { ne: null} } }) {
        edges {
          node {
            frontmatter {
              game
              year
              slug
              title
              gameLocation
              gameDate
              result
            }
            html
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: GameTemplate,
      context: {
        game: node.frontmatter.game,
        year: node.frontmatter.year,
        title: node.frontmatter.title,
        gameLocation: node.frontmatter.gameLocation,
        gameDate: node.frontmatter.gameDate,
        result: node.frontmatter.result,
        html: node.html,
      }, 
    });
  });
};
