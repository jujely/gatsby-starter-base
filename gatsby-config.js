require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "ujely",
    description: "Technology consulting & project management",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-post",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        global: {
          title: "ujely",
          description: "Technology Consulting & Project Mangement.",
          image: "default.jpg",
        },
        types: [`Page`, `Post`],
      },
    },
  ],
}
