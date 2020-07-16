import path from "path"
import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import SchemaOrg from "./Meta/SchemaOrg"
import Twitter from "./Meta/Twitter"
import OpenGraph from "./Meta/OpenGraph"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import styles from "../styles/glitchFrenchWave.module.css"

const SEO = ({ postMeta, isType, typeMeta, postPath, postDefaults }) => {
	const {
		title,
		description,
		image,
		name,
		givenName,
		familyName,
		alternateName,
		url,
		twitter,
		fbAppID,
		keywords,
		dateModified,
	} = useSiteMetadata()

	let defaultDescription = false
	if (postDefaults.description) {
		defaultDescription = `${postDefaults.description} ${name}`
	}
	const pageTitle = postMeta.title || title
	const pageDescription =
		postMeta.description ||
		postMeta.excerpt ||
		postMeta.content ||
		defaultDescription ||
		description
	const postImage = postMeta.image || image
	const pageUrl = postPath ? `${url}${path.sep}${postPath}` : url
	const datePublished = isType === "article" ? postMeta.datePublished : false
	typeMeta.published_time = datePublished
	typeMeta.section = postMeta.section || postMeta.topic || postMeta.type
	typeMeta.author = name
	let completeKeywords = []
	if (postMeta.keywords && Array.isArray(postMeta.keywords)) {
		completeKeywords = postMeta.keywords
	} else if (postMeta.keywords) {
		completeKeywords.push(postMeta.keywords)
	}
	if (typeMeta.section && !completeKeywords.includes(typeMeta.section)) {
		completeKeywords.push(typeMeta.section)
	}
	const keywordsString = completeKeywords.join(",")
	const siteImage = image
	// https://css-tricks.com/its-all-in-the-head-managing-the-document-head-of-a-react-powered-site-with-react-helmet/
	return (
		<React.Fragment>
			<Helmet defer={false}>
				<body className={styles.fnw} />
				{/* General tags */}
				<title>{pageTitle}</title>
				<meta name="title" content={pageTitle} />
				<meta name="description" content={pageDescription} />
				<meta name="image" content={postImage} />
				<meta name="author" content={name} />
				<meta name="keywords" content={keywordsString} />
			</Helmet>
			<Twitter
				twitter={twitter}
				title={pageTitle}
				description={pageDescription}
				image={postImage}
			/>
			<OpenGraph
				url={pageUrl}
				title={pageTitle}
				description={pageDescription}
				image={postImage}
				fbAppId={fbAppID}
				isType={isType}
				siteName={title}
				typeMeta={typeMeta}
				author={name}
				keywords={completeKeywords}
			/>
			<SchemaOrg
				url={pageUrl}
				siteUrl={url}
				siteDescription={description}
				siteImage={siteImage}
				title={pageTitle}
				description={pageDescription}
				image={postImage}
				fbAppId={fbAppID}
				isType={isType}
				siteName={title}
				typeMeta={typeMeta}
				author={name}
				dateModified={dateModified}
				datePublished={postMeta.date}
				keywords={completeKeywords}
				givenName={givenName}
				familyName={familyName}
				alternateName={alternateName}
			/>
		</React.Fragment>
	)
}

SEO.propTypes = {
	postMeta: PropTypes.any,
	typeMeta: PropTypes.any.isRequired,
	isType: PropTypes.string,
	postPath: PropTypes.string,
}

SEO.defaultProps = {
	isType: "article",
	postImage: null,
}

export default SEO
