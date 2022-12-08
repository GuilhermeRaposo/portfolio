/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://graposo.me",
    title: "Guilherme Raposo",
    description: `Guilherme Raposo's portfolio website`,
    author: `Guilherme Raposo`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: ["gatsby-plugin-sass"],
}
