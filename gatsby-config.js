
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fetched-data',
        path: './data/',
      },
    },
    'gatsby-transformer-remark',
  ],
};
