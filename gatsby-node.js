const pageCreators = require('./src/pageCreators');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  return Promise.all(
    Object.values(pageCreators).map(creator => creator(graphql, createPage))
  );
};
