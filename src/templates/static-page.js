import React from "react"
import { graphql } from "gatsby"
import styles from "../styles/glitchFrenchWave.module.css"
import Helmet from "react-helmet"
import SiteContainer from "../components/SiteContainer"

export default data => {
	console.log("Data: ", data.data)
	var srcDocContent = JSON.parse(data.data.file.fields.raw)
	// var file = fs.readFileSync('_projects/' + data.data.file.base);
	return (
		<SiteContainer>
			<div id={styles.staticPage}>
				<Helmet>
					<body className={styles.fnw} />
				</Helmet>
				<iframe srcDoc={srcDocContent} />
			</div>
		</SiteContainer>
	)
}

export const query = graphql`
	query($slug: String!) {
		file(fields: { slug: { eq: $slug } }) {
			relativePath
			publicURL
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
				raw
			}
		}
	}
`
