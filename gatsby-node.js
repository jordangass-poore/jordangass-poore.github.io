const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const configs = require("./config/index.js")
const crypto = require("crypto")
const fs = require("fs")
const nodeUtils = require("./src/utils/nodeAssemblers")
const nodeAssemblers = nodeUtils.nodeAssemblers
const { fluid } = require(`gatsby-plugin-sharp`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.sourceNodes = async ({ boundActionCreators }) => {
	const { createNode } = boundActionCreators
	// Create nodes here, generally by downloading data
	// from a remote API.
	// const data = await fetch(REMOTE_API);
	console.log("Create Configs")
	createNode({
		id: "configuration",
		parent: null, // or null if it's a source node without a parent
		children: [],
		...configs,
		internal: {
			type: `Config`,
			contentDigest: crypto
				.createHash(`md5`)
				.update(JSON.stringify(configs))
				.digest(`hex`),
			//mediaType: `text/markdown`, // optional
			content: JSON.stringify(configs), // optional
			description: `Configuration variables`, // optional
		},
	})

	var clipsFolder = __dirname + "/_clips"
	var files = fs.readdirSync(clipsFolder)
	var clipsNodes = []

	clipsNodes = files.map(async function(fileName) {
		var clipsFolder = __dirname + "/_clips"
		var markdownObj = nodeAssemblers.returnMarkdownObject(
			clipsFolder + "/" + fileName
		)
		if (markdownObj) {
			// var clip = clipsNode(markdownObj.html, markdownObj.metadata)
			var clip = {}
			try {
				// console.log('Create Clip Node with Markdown', markdownObj.metadata)
				var clipsObj = await nodeAssemblers.clipsObjDefaults(
					markdownObj.metadata
				)
				clipsObj.content = markdownObj.html

				clip = JSON.parse(JSON.stringify(clipsObj))
			} catch (e) {
				console.log(
					"clips Node Creation failed with html:",
					markdownObj.html,
					" metadata: ",
					markdownObj.metadata,
					" error: ",
					e
				)
				clip = false
			}
			if (clip) {
				var clipDescription = clip.description ? clip.description : clip.title
				//console.log("Post Clip Node processing with Markdown", clip)
				createNode({
					id: Buffer.from(clip.title).toString("base64"),
					parent: null, // or null if it's a source node without a parent
					children: [],
					clip: clip,
					internal: {
						type: `Clip`,
						//mediaType: `text/markdown`, // optional
						// content: JSON.stringify(configs), // optional
						description: clipDescription, // optional
						contentDigest: crypto
							.createHash(`md5`)
							.update(JSON.stringify(clip))
							.digest(`hex`),
						content: JSON.stringify(clip), // optional
					},
				})
			}
		}
		return true
	})
	await Promise.all(clipsNodes)
	var formObjs = await nodeAssemblers.getFormObjs()
	var formClips = formObjs.map(async function(formObj) {
		// console.log('Google Form Objs ', formObj)
		if (formObj) {
			// var clip = clipsNode(markdownObj.html, markdownObj.metadata)
			var clip = {}
			try {
				var clipsObj = await nodeAssemblers.clipsObjDefaults(formObj)
				clipsObj.content = ""
				clip = clipsObj
			} catch (e) {
				console.log("formObj clips Node Creation failed with html:", e)
				clip = false
			}
			if (clip) {
				var clipDescription = clip.description ? clip.description : clip.title
				createNode({
					id: Buffer.from(clip.title).toString("base64"),
					parent: null, // or null if it's a source node without a parent
					children: [],
					clip: clip,
					internal: {
						type: `Clip`,
						//mediaType: `text/markdown`, // optional
						// content: JSON.stringify(configs), // optional
						description: clipDescription, // optional
						contentDigest: crypto
							.createHash(`md5`)
							.update(JSON.stringify(clip))
							.digest(`hex`),
						content: JSON.stringify(clip), // optional
					},
				})
			}
		}
		return true
	})
	await Promise.all(formClips)

	// Process data into nodes.
	// data.forEach(datum => createNode(processDatum(datum)));
	var achievementsFolder = __dirname + "/_achievements"
	var achievementsFiles = fs.readdirSync(achievementsFolder)

	achievementsFiles.forEach(function(fileName) {
		var achievementsFolder = __dirname + "/_achievements"
		var markdownObj = nodeAssemblers.returnMarkdownObject(
			achievementsFolder + "/" + fileName
		)
		if (markdownObj) {
			// var clip = clipsNode(markdownObj.html, markdownObj.metadata)
			var achievement = {}
			try {
				// console.log('Create Achievements Node', markdownObj.metadata)
				var achievementObj = nodeAssemblers.achievementsObjDefaults(
					markdownObj.metadata
				)
				achievementObj.content = markdownObj.html
				achievement = achievementObj
			} catch (e) {
				console.log(
					"Achievements Node Creation failed with html:",
					markdownObj.html,
					" metadata: ",
					markdownObj.metadata,
					" error: ",
					e
				)
				achievement = false
			}
			if (achievement) {
				createNode({
					id: Buffer.from(achievement.title).toString("base64"),
					parent: null, // or null if it's a source node without a parent
					children: [],
					achievement: achievement,
					internal: {
						type: `Achievement`,
						//mediaType: `text/markdown`, // optional
						// content: JSON.stringify(configs), // optional
						description: achievement.description, // optional
						contentDigest: crypto
							.createHash(`md5`)
							.update(JSON.stringify(achievement))
							.digest(`hex`),
						content: JSON.stringify(achievement), // optional
					},
				})
			}
		}
		return
	})
	var achievFormObjs = await nodeAssemblers.getFormObjs(
		process.env.ACHIEVEMENTS_SHEETS_URL
	)
	achievFormObjs.forEach(function(formObj) {
		// console.log('Google Form Objs Achievements ', formObj)
		if (formObj) {
			// var clip = clipsNode(markdownObj.html, markdownObj.metadata)
			var achievement = {}
			try {
				var achievementObj = nodeAssemblers.achievementsObjDefaults(formObj)
				achievement = achievementObj
			} catch (e) {
				console.log("clips Node Creation failed with error: ", e)
				achievement = false
			}
			if (achievement) {
				createNode({
					id: Buffer.from(achievement.title).toString("base64"),
					parent: null, // or null if it's a source node without a parent
					children: [],
					achievement: achievement,
					internal: {
						type: `Achievement`,
						//mediaType: `text/markdown`, // optional
						// content: JSON.stringify(configs), // optional
						description: achievement.description, // optional
						contentDigest: crypto
							.createHash(`md5`)
							.update(JSON.stringify(achievement))
							.digest(`hex`),
						content: JSON.stringify(achievement), // optional
					},
				})
			}
		}
		return
	})

	// We're done, return.
	return
}

exports.onCreateNode = async ({ node, getNode, reporter, cache, actions }) => {
	fmImagesToRelative(node)
	// console.log(node)
	/**
	if (node && node.fluid) {
		console.log('fluid node', node.fluid)
		cache[node.fluid.originalName] = node.id
	}
 */
	if (node.sourceInstanceName === "basePages") {
		const { createNodeField } = actions
		var slug = createFilePath({ node, getNode, basePath: `` })
		// console.log("slug: ", slug)
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
	if (node.sourceInstanceName === "media") {
		const { createNodeField } = actions
		const relativeFilePath = createFilePath({
			node,
			getNode,
			basePath: "media/",
		})
		// Creates new query'able field with name of 'slug'
		createNodeField({
			node,
			name: "slug",
			value: `/media${relativeFilePath}`,
		})
	}

	if (node.internal.type === "Clip" || node.internal.type === "Achievement") {
		const { createNodeField } = actions
		let fluidImage = `${__dirname}/_images/`
		if (
			node.clip &&
			node.clip.image &&
			node.clip.image != "Transparent-l.png"
		) {
			// console.log(node.clip.image)
			fluidImage += node.clip.image
		} else if (
			node.achievement &&
			node.achievement.image &&
			node.achievement.image != "Transparent-l.png"
		) {
			// console.log(node.achievement.image)
			fluidImage += node.achievement.image
		} else {
			fluidImage += "Transparent-l.png"
		}
		// console.log('image exists', fs.existsSync(fluidImage));
		// node.imageObj = fluidImage
		createNodeField({
			node,
			name: `imgObj`,
			value: fluidImage,
		})
		/**
				if (node.clip.image && (node.clip.image != "Transparent.gif")) {
					const sourceNodeId = cache[node.clip.image];
					console.log(sourceNodeId)
				}

				const { createNodeField } = actions;
				let fluidImage;
				if (node.clip.image && (node.clip.image != "Transparent.gif")) {
					// console.log(node.clip.image)
					var extName = path.extname(node.clip.image)
					var finalextName = extName.substring(1);
					fluidImage = await fluid({
						file: "_images/" + node.clip.image,
						args: {
							toFormat: finalextName
						},
						reporter,
						cache,
					});
				} else {
					fluidImage = false;
				}
				createNodeField({
					node,
					name: `fluid`,
					value: fluidImage,
				})
		*/
	}

	if (node.sourceInstanceName === "projects" && node.ext === ".html") {
		// console.log('Setting up special project html node: ', node)
		const { createNodeField } = actions
		const relativeFilePath = createFilePath({
			node,
			getNode,
			basePath: "special-projects/",
		})
		// Creates new query'able field with name of 'slug'
		createNodeField({
			node,
			name: "slug",
			value: `/special-projects${relativeFilePath}`,
		})

		var fileResults = (function() {
			var fileName = node.base
			// console.log("raw file location: ", `${__dirname}/_projects/${fileName}`)
			var rawFile = fs
				.readFileSync(`${__dirname}/_projects/${fileName}`)
				.toString("UTF8")
			return rawFile
		})()

		createNodeField({
			node,
			name: "raw",
			value: JSON.stringify(fileResults),
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	// **Note:** The graphql function call returns a Promise
	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
	const result = await graphql(`
		query {
			__typename
			allFile(
				filter: {
					sourceInstanceName: { eq: "basePages" }
					fields: { slug: { ne: null } }
				}
			) {
				nodes {
					relativePath
					base
					name
					sourceInstanceName
					internal {
						type
						contentDigest
						description
						mediaType
					}
					fields {
						slug
					}
					childMarkdownRemark {
						id
						html
						frontmatter {
							title
							contentType
							isList
							subType
							highlight
						}
					}
				}
			}
		}
	`)
	result.data.allFile.nodes.forEach(node => {
		if (node && node.fields && node.fields.slug) {
			var queryFilter = ""
			var isList = false
			var pageObj = {}
			if (node.childMarkdownRemark.frontmatter.isList) {

				isList = true
				queryFilter = node.childMarkdownRemark.frontmatter.contentType
				pageObj = {
					path: node.fields.slug,
					component: path.resolve(`./src/templates/${queryFilter}-page.js`),
					context: {
						// Data passed to context is available
						// in page queries as GraphQL variables.
						slug: node.fields.slug,
						isList: isList,
						subType: node.childMarkdownRemark.frontmatter.subType
							? node.childMarkdownRemark.frontmatter.subType
							: false,
					},
				}
			} else if (node.childMarkdownRemark.frontmatter.highlight) {
				// const highlights = '{ highlight: [' + node.childMarkdownRemark.frontmatter.highlight + '] }';
				const highlights = node.childMarkdownRemark.frontmatter.highlight.split(
					" "
				)
				// console.log("Highlights Template created: ", highlights)
				isList = true
				queryFilter = node.childMarkdownRemark.frontmatter.contentType
				pageObj = {
					path: node.fields.slug,
					component: path.resolve(`./src/templates/topicsInFocus.js`),
					context: {
						// Data passed to context is available
						// in page queries as GraphQL variables.
						slug: node.fields.slug,
						isList,
						highlight: highlights,
					},
				}
			} else {
				isList = false
				queryFilter = ""
				pageObj = {
					path: node.fields.slug,
					component: path.resolve(`./src/templates/base-pages.js`),
					context: {
						// Data passed to context is available
						// in page queries as GraphQL variables.
						slug: node.fields.slug,
						isList: isList,
					},
				}
			}
			createPage(pageObj)
		} else {
			console.log('File-based page missing path', node)
		}
	})
	// console.log(JSON.stringify(result, null, 4))

	const clipsResult = await graphql(`
		query {
			__typename
			allClip {
				totalCount
				edges {
					previous {
						clip {
							slug
							title
						}
						id
					}
					node {
						id
						clip {
							title
							isBasedOn
							format
							topic
							publishedBy
							location
							media
							image
							imageSource
							description
							content
							date
							slug
						}
					}
					next {
						clip {
							slug
							title
						}
						id
					}
				}
			}
		}
	`)
	clipsResult.data.allClip.edges.forEach(clipObj => {
		// console.log(clipObj.node.clip.slug);
		var node = clipObj.node
		var previous, next
		var clipPrev = clipObj.previous
		var clipNext = clipObj.next
		if (node && node.clip && node.clip.slug) {
			try {
				previous = {
					id: clipPrev.id ? clipPrev.id : null,
					slug: clipPrev.clip ? clipPrev.clip.slug : null,
					title: clipPrev.clip ? clipPrev.clip.title : null,
				}
			} catch (e) {
				// console.log('Clip page build error on previous: ', clipObj, e)
				previous = {
					id: null,
					slug: null,
					title: null,
				}
			}
			try {
				next = {
					id: clipNext.id ? clipNext.id : null,
					slug: clipNext.clip ? clipNext.clip.slug : null,
					title: clipNext.clip ? clipNext.clip.title : null,
				}
			} catch (e) {
				// console.log('Clip page build error on next: ', e)
				next = {
					id: null,
					slug: null,
					title: null,
				}
			}
			createPage({
				path: "clip/" + node.clip.slug,
				component: path.resolve(`./src/templates/clip-page.js`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.clip.slug,
					id: node.id,
					mainImage: node.clip.image,
					mediaName: node.clip.media,
					previous,
					next,
				},
			})
		} else {
			console.log("Clip page failed to build", node.id)
		}
	})

	const achievsResult = await graphql(`
		query allAchievement {
			__typename
			allAchievement {
				totalCount
				edges {
					previous {
						id
						achievement {
							title
							slug
						}
					}
					node {
						id
						achievement {
							title
							date
							content
							affiliation
							type
							media
							description
							excerpt
							imageSource
							isBasedOn
							slug
						}
					}
					next {
						id
						achievement {
							title
							slug
						}
					}
				}
			}
		}
	`)
	achievsResult.data.allAchievement.edges.forEach(achievementObj => {
		// console.log(clipObj.node.clip.slug);
		var node = achievementObj.node
		var previous, next
		var achievementPrev = achievementObj.previous
		var achievementNext = achievementObj.next
		if (node && node.achievement && node.achievement.slug) {
			try {
				previous = {
					id: achievementPrev.id ? achievementPrev.id : null,
					slug: achievementPrev.achievement
						? achievementPrev.achievement.slug
						: null,
					title: achievementPrev.achievement
						? achievementPrev.achievement.title
						: null,
				}
			} catch (e) {
				console.log('achievement page build error on previous: ', e)
				previous = {
					id: null,
					slug: null,
					title: null,
				}
			}
			try {
				next = {
					id: achievementNext.id ? achievementNext.id : null,
					slug: achievementNext.achievement
						? achievementNext.achievement.slug
						: null,
					title: achievementNext.achievement
						? achievementNext.achievement.title
						: null,
				}
			} catch (e) {
				console.log('achievement page build error on next: ', e)
				next = {
					id: null,
					slug: null,
					title: null,
				}
			}
			createPage({
				path: "achievement/" + node.achievement.slug,
				component: path.resolve(`./src/templates/achievement-page.js`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.achievement.slug,
					id: node.id,
					mainImage: node.achievement.image,
					mediaName: node.achievement.media,
					previous,
					next,
				},
			})
		} else {
			console.log("Achievement page failed to build", node.id)
		}
	})

	const projectsFilesQ = await graphql(`
		query projectsFile {
			__typename
			allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
				nodes {
					publicURL
					relativePath
					sourceInstanceName
					ext
					base
					fields {
						slug
					}
					internal {
						content
						description
						ignoreType
						mediaType
					}
					id
				}
			}
		}
	`)
	// console.log('Projects: ', projectsFilesQ.data.allFile);
	projectsFilesQ.data.allFile.nodes.forEach(projectsObj => {
		// console.log("a project", projectsObj, projectsObj.fields)
		// var node = projectsObj.node;
		if (projectsObj.fields && projectsObj.fields.slug) {
			//console.log("a project slug", projectsObj.fields.slug)
			createPage({
				path: projectsObj.fields.slug,
				component: path.resolve(`./src/templates/static-page.js`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: projectsObj.fields.slug,
					// id: projectsObj.id,
					// publicURL: projectsObj.publicURL
				},
			})
		} else {
			console.log("Static page failed to build", projectsObj.id)
		}
	})
}
