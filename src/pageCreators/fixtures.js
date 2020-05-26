const path = require(`path`);

const createGamePages = (graphql, createPage) =>
  graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "fixtures" } } }) {
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
    }
  `).then((result) => {
    const GameTemplate = path.resolve(`src/templates/fixtureTemplateTemplate.jsx`);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: GameTemplate,
        context: {
          game: node.frontmatter.game,
          year: node.frontmatter.year,
          html: node.html,
        },
      });
    });
  });

module.exports = {
  createGamePages,
};
