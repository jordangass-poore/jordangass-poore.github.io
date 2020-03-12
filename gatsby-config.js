/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
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
				name: "basePages",
				path: `${__dirname}/_pages/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				id: "configFile",
				name: "configFile",
				path: `${__dirname}/config/`,
				description: "SiteConfiguration",
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
		"gatsby-transformer-json",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
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
	siteMetadata: {
		title: "Jordan Gass-Poore' Portfolio Site",
		description: "Portfolio",
		name: "Jordan Gass-Poore'",
		bigName: "Jordan <br />Gass-Poore'",
		intro:
			"This website is a professional profile. You can find examples of my work as well as lists of my qualifications in the menu to the left.",
	},
}
