import React from "react"
import SiteContainer from "./SiteContainer"

export default ({ children }) => (
	<SiteContainer>
		<div
			style={{
				margin: `3rem auto`,
				width: "100%",
				// maxWidth: "80vw",
				// padding: `0 1rem`,
			}}
		>
			{children}
		</div>
	</SiteContainer>
)
