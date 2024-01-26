// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbycontentfulhomepage.gatsbyjs.io/",
    title: "POINT BLANK CAPITAL",
    author: `Hideo Daikoku`,
    description: "UAE'S LEADING PROPRIETARY TRADING FIRM.",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "POINT BLANK CAPITAL",
        short_name: "PointBlank",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffffff",
        theme_color: "#000000",
        icon: "src/favicon.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K534WBWQ",
      },
    },
  ],
}
