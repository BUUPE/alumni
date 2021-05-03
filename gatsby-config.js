module.exports = {
  siteMetadata: {
    title: `Alumni Portal`,
    description: `Network with past and current BU UPE members.`,
    author: `BU UPE`,
    siteUrl: `https://upe.bu.edu/alumni`,
  },
  pathPrefix: `/alumni`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BU UPE Alumni Portal`,
        short_name: `Alumni Portal`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/styles/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/styles/theme.js`).darkTheme,
      },
    },
  ],
};
