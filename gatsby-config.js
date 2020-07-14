/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

var configs = require("./config")
configs.dateModified = new Date().toISOString()

module.exports = {
	// What's going on here? https://www.christopherbiscardi.com/post/getting-gatsby-images-from-generated-fields
	// and https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types
	mapping: {
		"Clip.fields.imgObj": `File.absolutePath`,
		"Achievement.fields.imgObj": `File.absolutePath`,
	},
	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "src",
				path: `${__dirname}/src/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "jobs",
				path: `${__dirname}/_jobs/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "siteConfigs",
				path: `${__dirname}/config/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "basePages",
				path: `${__dirname}/_pages/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/_images/`,
				name: "images",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/_clips/`,
				name: "mdClips",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/_media/`,
				name: "media",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/_projects/`,
				name: "projects",
			},
		},
		"gatsby-transformer-remark",
		"gatsby-remark-relative-images",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-transformer-json",
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-react-leaflet",
			options: {
				linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				// < link href="https://fonts.googleapis.com/css?family=Asap:400,400i,500,700|Dosis:500,800|Work+Sans:500,700&display=swap" rel="stylesheet" >
				fonts: [
					{
						family: `Work Sans`,
						// subsets: [`latin`],
						variants: [`500`, `700`],
					},
					{
						family: `Asap`,
						variants: [`400`, `400i`, `500`, `700`],
					},
					{
						family: `Dosis`,
						variants: [`500`, `800`],
					},
				],
			},
		},
	],
	siteMetadata: configs,
}
