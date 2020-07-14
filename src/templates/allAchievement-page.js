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
/**
 *
				<NodesList
					edgeList={data.data.allAchievement.edges}
					baseOfLink="achievement/"
					baseOfObject="achievement"
					extraFields={["affiliation"]}
				/>
 */

export default data => {
	const post = data.data.file.childMarkdownRemark
	const baseOfObject = "clip"

	const emptyQuery = ""
	const emptyTopicQuery = ""
	const emptyFormatQuery = ""

	const [state, setState] = useState({
		filteredData: [],
		query: emptyQuery,
	})

	const edgeList = data.data.allAchievement.edges

	// From: https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial
	const handleInputChange = event => {
		const query = event.target.value
		// this is how we get all of our posts
		const edges = edgeList || []
		// return all filtered posts
		const filteredData = edges.filter(node => {
			// destructure data from post frontmatter
			const { description, title, content } = node.node[baseOfObject]
			let validity =
				description.toLowerCase().includes(query.toLowerCase()) ||
				title.toLowerCase().includes(query.toLowerCase()) ||
				content.toLowerCase().includes(query.toLowerCase()) // ||
			// topic.toLowerCase().includes(state.topicQuery.toLowerCase())

			return validity
		})
		// update state according to the latest query and results
		setState({
			query, // with current query string from the `Input` event
			filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
		})
	}

	const { filteredData, query } = state
	const hasSearchResults = filteredData && query !== emptyQuery
	const edges = hasSearchResults ? filteredData : edgeList
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
				Achievements
			</BreadCrumb>
			<div>
				<div id={stylesNodes.allNodesHeader}>
					<h1>{post.frontmatter.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</div>
				<NodesList
					edgeList={edges}
					baseOfLink="achievement/"
					baseOfObject="achievement"
					extraFields={[
						{ key: "date", pretext: "Achieved on " },
						{ key: "affiliation", pretext: "Granted by " },
					]}
					handleInputChange={handleInputChange}
					sorters={[]}
				/>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!, $isList: Boolean!, $subType: String) {
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
		allAchievement(
			sort: { fields: achievement___date, order: DESC }
			filter: { achievement: { type: { eq: $subType } } }
		) @include(if: $isList) {
			totalCount
			edges {
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
						imageSource
						isBasedOn
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
