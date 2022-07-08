module.exports = {
  siteMetadata: {
    title: `EMERALD`,
    siteUrl: `https://www.eme.wtf`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
