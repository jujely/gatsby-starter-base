require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "ujely",
    description: ">>>.",
    siteUrl: process.env.SITE_URL || "http://ujely.com",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-post",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
  ],
}
