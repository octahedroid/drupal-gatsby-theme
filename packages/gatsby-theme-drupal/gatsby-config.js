module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme`,
      options: {
        root: __dirname,
        themePath: `${__dirname}/theme`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
