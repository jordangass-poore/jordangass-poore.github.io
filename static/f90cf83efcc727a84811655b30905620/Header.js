import React from "react"

export default ({ config }) => (
	<header>
		<div>
			<div id="topid">
				<h2>{config.name}</h2>
				<h5>
					{config.address} &#149; {config.phone}
				</h5>
				<h5>{config.description}</h5>
				<hr />
			</div>
		</div>
	</header>
)
