/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require('dotenv').config({
// 	path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
  siteMetadata: {
    name: `ButterCMS knowledge base with Gatsby`,
    title: `knowledge-base-with-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
			resolve: `gatsby-source-buttercms`,
			options: {
				authToken: process.env.BUTTER_CMS_API_KEY,
			},
		},

    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "categories",
        path: `${__dirname}/src/categories`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
