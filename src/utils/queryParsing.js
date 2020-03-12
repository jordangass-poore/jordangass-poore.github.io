const queryTools = {
	resolveSiteMetadataEdge: function (field, data) {
		return data.allSite.edges[0].node.siteMetadata[field]
	},
}

export default queryTools
