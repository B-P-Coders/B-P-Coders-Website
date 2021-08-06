module.exports = {
  siteMetadata: {
    siteUrl: "https://bpstudio.ml",
    title: `B&P Coders`,
    description: `Oficjalna strona B&P Coders`, 
    author: `@B&P Coders`, 
    //      ^                ^
    //      |                |   Paweł zajmij się tym
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-Z8Q1SYV6K0",
      },
    },
    `gatsby-plugin-sitemap`,
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
        name: `Oficjalna strona B&P Coders`,
        short_name: `B&P Coders`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/BP-profile-coders-logo-web-kolor.png`, 
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
  ],
}
