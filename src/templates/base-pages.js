import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default data => {
	const post = data.data.file.childMarkdownRemark
	console.log("Data: ", data.data)
	return (
		<Layout>
			<div>
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
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
	}
`
