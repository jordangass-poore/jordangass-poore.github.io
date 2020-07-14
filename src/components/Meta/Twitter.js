import React from "react"
import Helmet from "react-helmet"

const Twitter = props => {

	return (
		<React.Fragment>
			<Helmet defer={false}>
				{/* Twitter Card tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content={props.twitter} />
				<meta name="twitter:title" content={props.title} />
				<meta name="twitter:description" content={props.description} />
				<meta name="twitter:image" content={props.image} />
			</Helmet>
		</React.Fragment>
	)
}

export default Twitter
