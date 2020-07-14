import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContainerCard from "../components/ContainerCard"
import Link from "gatsby-link"
import styles from "../styles/glitchFrenchWave.module.css"
import BreadCrumb from "../components/BreadCrumb"
import SEO from "../components/SEO"

export default ({ data, pageContext }) => {
	console.log("Data: ", data, pageContext)
	const cardStyle1 = [styles.rotated, styles.rotate1].join(" ")
	const cardStyle2 = [styles.rotated, styles.rotate2].join(" ")
	const cardStyle3 = [styles.rotated, styles.rotate3].join(" ")
	const highlightSet = {}
	pageContext.highlight.forEach(highlight => {
		highlightSet[highlight] = []
	})
	const cardListClipMaker = node => {
		// Transforms
		return (
			<li key={node.id}>
				<Link to={"/" + "clip/" + node["clip"].slug} key={node.id}>
					<h5>{node.clip.title}</h5>
				</Link>
			</li>
		)
	}
	data.allClip.edges.forEach(({ node }) => {
		// console.log(node.clip)
		highlightSet[node.clip.topic].push(cardListClipMaker(node))
	})
	console.log("Highlights", highlightSet)
	return (
		<Layout>
			<SEO
				postMeta={{
					title: "Topics in focus",
					slug: pageContext.slug,
				}}
				postDefaults={{
					description: "Topics focused on by Jordan Gass-Poore'",
				}}
				postPath={"topics-in-focus/"}
				isType="article"
				typeMeta={{
					publisher_name: "Jordan Gass-Poore'",
				}}
			/>
			<BreadCrumb
				style={{
					display: "block",
					float: "left",
					position: "absolute",
					top: "calc(3rem - 34px)",
					paddingLeft: "20px",
				}}
			>
				Topics in Focus
			</BreadCrumb>
			<div className={styles.outerCardContainer}>
				<div className={styles.cardContainer}>
					<ContainerCard
						className={cardStyle1}
						boxTitle="The Death Beat"
						boxSubTitle="Topic in Focus"
					>
						<ul className={styles.listOfLinks}>
							{highlightSet[pageContext.highlight[0]]}
						</ul>
					</ContainerCard>
					<ContainerCard
						className={cardStyle2}
						boxTitle="Environment"
						boxSubTitle="Topic in Focus"
					>
						<ul className={styles.listOfLinks}>
							{highlightSet[pageContext.highlight[1]]}
						</ul>
					</ContainerCard>
					<ContainerCard
						className={cardStyle3}
						boxTitle="Travel"
						boxSubTitle="Topic in Focus"
					>
						<ul className={styles.listOfLinks}>
							{highlightSet[pageContext.highlight[2]]}
						</ul>
					</ContainerCard>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!, $isList: Boolean!, $highlight: [String]) {
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
					highlight
				}
			}
		}
		allClip(
			sort: { fields: clip___date, order: DESC }
			filter: { clip: { topic: { in: $highlight } } }
		) @include(if: $isList) {
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
