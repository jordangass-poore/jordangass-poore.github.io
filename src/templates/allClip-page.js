import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "gatsby-link"
import NodesList from "../components/NodesList"
import styles from "../styles/glitchFrenchWave.module.css"
import stylesNodes from "../styles/fwAllNodes.module.css"
import BreadCrumb from "../components/BreadCrumb"
import SortDown from "../components/SortDown"
import Helmet from "react-helmet"
// Cards are topic=Features, format=text, format=audio

export default data => {
	const post = data.data.file.childMarkdownRemark
	const baseOfObject = "clip"

	const emptyQuery = ""
	const emptyTopicQuery = ""
	const emptyFormatQuery = ""

	const [state, setState] = useState({
		filteredData: [],
		query: emptyQuery,
		topicQuery: emptyTopicQuery,
		formatQuery: emptyFormatQuery,
	})

	const edgeList = data.data.allClip.edges

	// From: https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial
	const handleInputChange = event => {
		const query = event.target.value
		// this is how we get all of our posts
		const edges = edgeList || []
		const { topicQuery, formatQuery } = state
		// return all filtered posts
		const filteredData = edges.filter(node => {
			// destructure data from post frontmatter
			const { description, title, topic, format } = node.node[baseOfObject]
			let validity =
				description.toLowerCase().includes(query.toLowerCase()) ||
				title.toLowerCase().includes(query.toLowerCase()) ||
				topic.toLowerCase().includes(query.toLowerCase()) // ||
			// topic.toLowerCase().includes(state.topicQuery.toLowerCase())

			var topicValid = true
			if (topicQuery) {
				topicValid = topic.toLowerCase().includes(topicQuery.toLowerCase())
				// console.log("Topic check addl ", topicValid)
			}

			var formatValid = true
			if (formatQuery) {
				formatValid = format.toLowerCase().includes(formatQuery.toLowerCase())
			}

			return validity && topicValid && formatValid
		})
		// update state according to the latest query and results
		setState({
			query, // with current query string from the `Input` event
			topicQuery,
			formatQuery,
			filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
		})
	}

	const handleTopicChange = event => {
		const topicQuery = event.target.value
		// console.log("Topic change: ", event)
		// this is how we get all of our posts
		const edges = edgeList || []
		const { query, formatQuery } = state
		// return all filtered posts
		const filteredData = edges.filter(node => {
			// destructure data from post frontmatter
			const { description, title, topic, format } = node.node[baseOfObject]
			var validity =
				// standardize data with .toLowerCase()
				// return true if the description, title or tags
				// contains the query string
				// description.toLowerCase().includes(state.query.toLowerCase()) ||
				// title.toLowerCase().includes(state.query.toLowerCase()) ||
				// topic.toLowerCase().includes(state.query.toLowerCase()) ||
				topic.toLowerCase().includes(topicQuery.toLowerCase())

			var queryValid = true
			if (queryValid) {
				queryValid =
					description.toLowerCase().includes(query.toLowerCase()) ||
					title.toLowerCase().includes(query.toLowerCase()) ||
					topic.toLowerCase().includes(query.toLowerCase())
			}

			var formatValid = true
			if (formatQuery) {
				formatValid = format.toLowerCase().includes(formatQuery.toLowerCase())
			}

			return validity && queryValid && formatValid
		})
		// update state according to the latest query and results
		setState({
			query,
			topicQuery, // with current query string from the `Input` event
			formatQuery,
			filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
		})
	}

	const handleFormatChange = event => {
		const formatQuery = event.target.value
		// this is how we get all of our posts
		const edges = edgeList || []
		const { topicQuery, query } = state
		// return all filtered posts
		const filteredData = edges.filter(node => {
			// destructure data from post frontmatter
			const { description, title, topic, format } = node.node[baseOfObject]
			let validity = format
				.toLowerCase()
				.trim()
				.includes(formatQuery.toLowerCase().trim()) // ||
			// topic.toLowerCase().includes(state.topicQuery.toLowerCase())

			var topicValid = true
			if (topicQuery) {
				topicValid = topic.toLowerCase().includes(topicQuery.toLowerCase())
			}

			var queryValid = true
			if (queryValid) {
				queryValid =
					description.toLowerCase().includes(query.toLowerCase()) ||
					title.toLowerCase().includes(query.toLowerCase()) ||
					topic.toLowerCase().includes(query.toLowerCase())
			}

			return validity && topicValid && queryValid
		})
		// update state according to the latest query and results
		setState({
			query, // with current query string from the `Input` event
			topicQuery,
			formatQuery,
			filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
		})
	}

	const { filteredData, topicQuery, formatQuery, query } = state
	const hasSearchResults =
		filteredData &&
		(query !== emptyQuery ||
			topicQuery !== emptyTopicQuery ||
			formatQuery !== emptyFormatQuery)
	const edges = hasSearchResults ? filteredData : edgeList

	const topicSelect = (
		<SortDown
			key="sortdown-topic"
			edgeParamter="topic"
			baseOfObject={baseOfObject}
			handleChange={handleTopicChange}
			edgeList={edgeList}
		/>
	)

	const formatSelect = (
		<SortDown
			key="sortdown-format"
			edgeParamter="format"
			baseOfObject={baseOfObject}
			handleChange={handleFormatChange}
			edgeList={edgeList}
		/>
	)

	// console.log("Data: ", data.data)
	return (
		<Layout>
			<Helmet>
				<body className={styles.fnw} />
			</Helmet>
			<BreadCrumb
				style={{
					display: "block",
					float: "left",
					position: "absolute",
					top: "calc(3rem - 34px)",
					paddingLeft: "20px",
				}}
			>
				Clips
			</BreadCrumb>
			<div>
				<div id={stylesNodes.allNodesHeader}>
					<h1>{post.frontmatter.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</div>
				<NodesList
					edgeList={edges}
					baseOfLink="clip/"
					baseOfObject="clip"
					extraFields={[{ key: "publishedBy", pretext: "Published by " }]}
					handleInputChange={handleInputChange}
					sorters={[topicSelect, formatSelect]}
				/>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!, $isList: Boolean!) {
		file(fields: { slug: { eq: $slug } }) {
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
				}
			}
		}
		allClip(sort: { fields: clip___date, order: DESC }) @include(if: $isList) {
			totalCount
			edges {
				node {
					id
					clip {
						title
						date
						isBasedOn
						format
						topic
						publishedBy
						location
						media
						imageSource
						description
						content
						slug
					}
					fields {
						imgObj {
							id
							publicURL
							childImageSharp {
								fluid(maxWidth: 300) {
									...GatsbyImageSharpFluid
								}
								id
							}
						}
					}
				}
			}
		}
	}
`
