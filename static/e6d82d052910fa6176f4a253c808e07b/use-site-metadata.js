import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SiteMetaData {
				site {
					siteMetadata {
						title
						description
						url
						name
						title
						twitter
						image
						htmlDescription
						givenName
						fbAppID
						familyName
						description
						alternateName
						dateModified
					}
				}
			}
		`
	)
	return site.siteMetadata
}
