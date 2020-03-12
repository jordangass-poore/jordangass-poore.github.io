import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "gatsby-link"
import styles from "../styles/glitchFrenchWave.module.css"

// Cards are topic=Features, format=text, format=audio

export default data => {
	const post = data.data.file.childMarkdownRemark
	console.log("Data: ", data.data)
	return (
		<Layout>
			<div>
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
				<ul>
					{data.data.allClip.edges.map(node => (
						<li key={node.node.id}>
							<Link to={"/clip/" + node.node.clip.slug} key={node.node.id}>
								<span
									style={{
										textDecoration: "underline",
									}}
								>
									<h5>{node.node.clip.title}</h5>
								</span>
							</Link>
						</li>
					))}
				</ul>
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
				}
			}
		}
	}
`
