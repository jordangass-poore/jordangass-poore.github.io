import { useStaticQuery, graphql } from "gatsby"

export const useClipsLocationData = () => {
	const { geoDClips } = useStaticQuery(
		graphql`
			query ClipGeoData {
				__typename
				allClip {
					nodes {
						clip {
							title
							topic
							slug
							location
							locationData {
								location {
									lat
									lng
								}
								placename
								geoMetadata {
									country
								}
							}
						}
					}
				}
			}
		`
	)
	return geoDClips.allClip.nodes
}
