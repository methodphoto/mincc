
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
    'gatsby-transformer-remark',
  ],
};

//module.exports = {
//  siteMetadata: {
//    siteUrl: `https://min.org.uk`,
//  },
//  plugins: [`gatsby-plugin-sitemap`],
//}
