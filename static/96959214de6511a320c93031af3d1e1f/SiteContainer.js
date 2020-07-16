import React from "react"

export default ({ id, children }) => (
	<div
		id={id ? "site-container site-container__" + id : "site-container"}
		style={{
			height: "100%",
			width: "100%",
			display: "block",
			// maxWidth: "80vw",
			// padding: `0 1rem`,
		}}
	>
		{children}
	</div>
)
