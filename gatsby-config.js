require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "ujely",
<<<<<<< HEAD
    description: "Technology consulting & project management",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
=======
    description: ">>>.",
    siteUrl: process.env.SITE_URL || "http://ujely.com",
>>>>>>> 79fca9205386b0dc0364411caeaa0ce09a4ddfb6
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
