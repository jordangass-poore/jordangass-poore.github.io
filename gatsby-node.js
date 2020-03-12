const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const configs = require("./config/index.js")
const crypto = require("crypto")
const fs = require("fs")
const nodeUtils = require("./src/utils/nodeAssemblers")
const nodeAssemblers = nodeUtils.nodeAssemblers;


const clipsNode = function (html, metadata) {
	try {
		// console.log('Create Clip Node', metadata)
		var clipsObj = nodeAssemblers.clipsObjDefaults(metadata);
		clipsObj.content = html;
		return clipsObj;
	} catch (e) {
		console.log('clips Node Creation failed with html:', html, ' metadata: ', metadata, ' error: ', e);
		return false;
	}
}

const clipProcessor = function (fileName) {
	var clipsFolder = __dirname + '/_clips';
	var markdownObj = nodeAssemblers.returnMarkdownObject(clipsFolder + '/' + fileName);
	if (markdownObj) {
		// var clip = clipsNode(markdownObj.html, markdownObj.metadata)
		var clip = {};
		try {
			// console.log('Create Clip Node', markdownObj.metadata)
			var clipsObj = nodeAssemblers.clipsObjDefaults(markdownObj.metadata);
			clipsObj.content = markdownObj.html;
			clip = clipsObj;
		} catch (e) {
			console.log('clips Node Creation failed with html:', markdownObj.html, ' metadata: ', markdownObj.metadata, ' error: ', e);
			clip = false;
		}
		if (clip) {
			createNode({
				id: (clip.title).hexEncode(),
				parent: null, // or null if it's a source node without a parent
				children: [],
				clip: clip,
				internal: {
					type: `Clip`,
					//mediaType: `text/markdown`, // optional
					// content: JSON.stringify(configs), // optional
					description: clip.description, // optional
					contentDigest: crypto
						.createHash(`md5`)
						.update(JSON.stringify(clip))
						.digest(`hex`),
					content: JSON.stringify(clip), // optional
				}
			});
		}
	}
	return;
}

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
	});

	var clipsFolder = __dirname + '/_clips';
	var files = fs.readdirSync(clipsFolder);
	var clipsNodes = [];

	files.forEach(function (fileName) {
		var clipsFolder = __dirname + '/_clips';
		var markdownObj = nodeAssemblers.returnMarkdownObject(clipsFolder + '/' + fileName);
		if (markdownObj) {
			// var clip = clipsNode(markdownObj.html, markdownObj.metadata)
			var clip = {};
			try {
				// console.log('Create Clip Node', markdownObj.metadata)
				var clipsObj = nodeAssemblers.clipsObjDefaults(markdownObj.metadata);
				clipsObj.content = markdownObj.html;
				clip = clipsObj;
			} catch (e) {
				console.log('clips Node Creation failed with html:', markdownObj.html, ' metadata: ', markdownObj.metadata, ' error: ', e);
				clip = false;
			}
			if (clip) {
				var clipDescription = clip.description ? clip.description : clip.title;

				createNode({
					id: Buffer.from(clip.title).toString('base64'),
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
					}
				});
			}
		}
		return;
	});
	var formObjs = await nodeAssemblers.getFormObjs();
	formObjs.forEach(function (formObj) {
		// console.log('Google Form Objs ', formObj)
		if (formObj) {
			// var clip = clipsNode(markdownObj.html, markdownObj.metadata)
			var clip = {};
			try {
				var clipsObj = nodeAssemblers.clipsObjDefaults(formObj);
				clipsObj.content = '';
				clip = clipsObj;
			} catch (e) {
				console.log('clips Node Creation failed with html:', markdownObj.html, ' metadata: ', markdownObj.metadata, ' error: ', e);
				clip = false;
			}
			if (clip) {
				var clipDescription = clip.description ? clip.description : clip.title;
				createNode({
					id: Buffer.from(clip.title).toString('base64'),
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
					}
				});
			}
		}
		return;
	});

	// Process data into nodes.
	// data.forEach(datum => createNode(processDatum(datum)));
	var achievementsFolder = __dirname + '/_achievements';
	var achievementsFiles = fs.readdirSync(achievementsFolder);
	var clipsNodes = [];

	achievementsFiles.forEach(function (fileName) {
		var achievementsFolder = __dirname + '/_achievements';
		var markdownObj = nodeAssemblers.returnMarkdownObject(achievementsFolder + '/' + fileName);
		if (markdownObj) {
			// var clip = clipsNode(markdownObj.html, markdownObj.metadata)
			var achievement = {};
			try {
				// console.log('Create Achievements Node', markdownObj.metadata)
				var achievementObj = nodeAssemblers.achievementsObjDefaults(markdownObj.metadata);
				achievementObj.content = markdownObj.html;
				achievement = achievementObj;
			} catch (e) {
				console.log('Achievements Node Creation failed with html:', markdownObj.html, ' metadata: ', markdownObj.metadata, ' error: ', e);
				achievement = false;
			}
			if (achievement) {
				createNode({
					id: Buffer.from(achievement.title).toString('base64'),
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
					}
				});
			}
		}
		return;
	});
	var formObjs = await nodeAssemblers.getFormObjs(process.env.ACHIEVEMENTS_SHEETS_URL);
	formObjs.forEach(function (formObj) {
		// console.log('Google Form Objs Achievements ', formObj)
		if (formObj) {
			// var clip = clipsNode(markdownObj.html, markdownObj.metadata)
			var achievement = {};
			try {
				var achievementObj = nodeAssemblers.achievementsObjDefaults(formObj);
				achievement = achievementObj;
			} catch (e) {
				console.log('clips Node Creation failed with:', achievementObj, ' error: ', e);
				achievement = false;
			}
			if (achievement) {
				createNode({
					id: Buffer.from(achievement.title).toString('base64'),
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
					}
				});
			}
		}
		return;
	});

	// We're done, return.
	return
}

exports.onCreateNode = ({ node, getNode, actions }) => {
	if (node.sourceInstanceName === "basePages") {
		const { createNodeField } = actions;
		var slug = createFilePath({ node, getNode, basePath: `` });
		console.log('slug: ', slug)
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
	if (node.sourceInstanceName === "media") {
		const { createNodeField } = actions;
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
	if (node.sourceInstanceName === "projects" && node.ext === ".html") {
		console.log('Setting up special project html node: ', node)
		const { createNodeField } = actions;
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

		var fileResults = (function () {
			var fileName = node.base
			console.log("raw file location: ", `${__dirname}/_projects/${fileName}`)
			var rawFile = fs
				.readFileSync(`${__dirname}/_projects/${fileName}`).toString('UTF8')
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
		allFile(filter: {sourceInstanceName: {eq: "basePages"}, fields: {slug: {ne: null}}}) {
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
					}
				}
			}
		}
	}
  `)
	result.data.allFile.nodes.forEach((node) => {
		if (node && node.fields && node.fields.slug) {
			var queryFilter = '';
			var isList = false;
			var pageObj = {};
			if (node.childMarkdownRemark.frontmatter.isList) {
				console.log('List Template created: ', node.childMarkdownRemark.frontmatter.isList);
				isList = true;
				queryFilter = node.childMarkdownRemark.frontmatter.contentType;
				pageObj = {
					path: node.fields.slug,
					component: path.resolve(`./src/templates/${queryFilter}-page.js`),
					context: {
						// Data passed to context is available
						// in page queries as GraphQL variables.
						slug: node.fields.slug,
						isList: isList
					},
				};
			} else {
				isList = false;
				queryFilter = '';
				pageObj = {
					path: node.fields.slug,
					component: path.resolve(`./src/templates/base-pages.js`),
					context: {
						// Data passed to context is available
						// in page queries as GraphQL variables.
						slug: node.fields.slug,
						isList: isList
					},
				};
			}
			createPage(pageObj)
		}
	})
	// console.log(JSON.stringify(result, null, 4))

	const clipsResult = await graphql(`
	query {
		__typename
		allClip {
			totalCount
			edges {
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
			}
		}
	}`);
	clipsResult.data.allClip.edges.forEach((clipObj) => {
		// console.log(clipObj.node.clip.slug);
		var node = clipObj.node;
		if (node && node.clip && node.clip.slug) {
			createPage({
				path: 'clip/' + node.clip.slug,
				component: path.resolve(`./src/templates/clip-page.js`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.clip.slug,
					id: node.id,
					mainImage: node.clip.image,
					mediaName: node.clip.media
				}
			});
		} else {
			console.log('Clip page failed to build', node.id)
		}
	});

	const projectsFilesQ = await graphql(`
	query projectsFile {
		__typename
		allFile(filter: {sourceInstanceName: {eq: "projects"}}) {
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
	}`
	)
	console.log('Projects: ', projectsFilesQ.data.allFile);
	projectsFilesQ.data.allFile.nodes.forEach((projectsObj) => {
		console.log('a project', projectsObj, projectsObj.fields);
		// var node = projectsObj.node;
		if (projectsObj.fields && projectsObj.fields.slug) {
			console.log('a project slug', projectsObj.fields.slug);
			createPage({
				path: projectsObj.fields.slug,
				component: path.resolve(`./src/templates/static-page.js`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: projectsObj.fields.slug,
					// id: projectsObj.id,
					// publicURL: projectsObj.publicURL
				}
			});
		} else {
			console.log('Static page failed to build', projectsObj.id)
		}
	});

}
