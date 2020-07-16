import React from "react"
import Helmet from "react-helmet"

const SchemaOrg = ({
	isType,
	url,
	title,
	author,
	image,
	siteImage,
	description,
	datePublished,
	siteUrl,
	siteDescription,
	typeMeta,
	alternateName,
	givenName,
	familyName,
	keywords,
}) => {
	const defaultJSONLD = {
		"@context": "http://schema.org",
		"@type": "WebSite",
		url: siteUrl,
		name: title,
		alternateName: alternateName,
	}

	let typeContent = {}
	typeContent.url = url
	typeContent["author"] = {
		"@type": "Person",
		name: author,
		description: siteDescription,
		sameAs: siteUrl,
		image: {
			"@type": "ImageObject",
			url: siteImage,
		},
		givenName: givenName,
		familyName: familyName,
		alternateName: alternateName,
		publishingPrinciples: siteUrl + "/about/",
	}
	typeContent["publisher"] = typeContent["author"]
	typeContent["mainEntityOfPage"] = {
		"@type": "WebPage",
		"@id": url,
	}

	if (typeMeta.isBasedOn) {
		typeContent.isBasedOn = typeMeta.isBasedOn
	}

	typeContent["@context"] = "http://schema.org"

	if (image) {
		typeContent["image"] = [image]
	}

	let typeTags = null
	switch (isType) {
		case "website":
			typeContent = defaultJSONLD
			break
		case "blog":
			typeContent["@type"] = "BlogPosting"
			typeContent.articleSection = typeMeta.section
			typeContent.headline = title
			typeContent["publisher"] = {
				"@type": "Organization",
				name: typeMeta.publisher_name,
				description: "A news site.",
				sameAs: typeMeta.publisher,
				logo: "",
			}
			typeContent.keywords = keywords.join(",")
			break
		// eslint-disable-next-line no-fallthrough
		case "article":
			typeContent["@type"] = "Article"
			typeContent.articleSection = typeMeta.section
			typeContent.headline = title
			typeContent["publisher"] = {
				"@type": "Organization",
				name: typeMeta.publisher_name,
				description: "A news site.",
				sameAs: typeMeta.publisher,
			}
			typeContent.keywords = keywords.join(",")
			break
		// eslint-disable-next-line no-fallthrough
		case "NewsArticle":
			typeContent["@type"] = "NewsArticle"
			typeContent.articleSection = typeMeta.section
			typeContent.headline = title
			typeContent["publisher"] = {
				"@type": "Organization",
				name: typeMeta.publisher_name,
				description: "A news site.",
				sameAs: typeMeta.publisher,
			}
			typeContent.keywords = keywords.join(",")
			break
		case "profile":
			// typeContent = "profile"
			typeContent["@type"] = "Profile"
			break
		case "place":
			// typeContent = "place"
			break
		case "book":
			// typeContent = "book"
			typeTags = typeMeta.map(meta => (
				<meta
					property={"book:" + meta.key}
					key={meta.key}
					content={meta.value}
				/>
			))
			keywords.forEach(tag => {
				typeTags.push(
					<meta property="book:tag" key={"book-tag-" + tag} content={tag} />
				)
			})
			break
		case "books.author":
			// typeContent = "books.author"
			break
		case "books.quotes":
			// typeContent = "books.quotes"
			break
		case "song":
			// typeContent = "music.song"
			typeTags = typeMeta.map(meta => (
				<meta
					property={"music.song:" + meta.key}
					key={meta.key}
					content={meta.value}
				/>
			))
			break
		case "album":
			// typeContent = "music.album"
			typeTags = typeMeta.map(meta => (
				<meta
					property={"music.album:" + meta.key}
					key={meta.key}
					content={meta.value}
				/>
			))
			break
		case "playlist":
			// typeContent = "music.playlist"
			break
		case "radio_station":
			// typeContent = "music.radio_station"
			break
		case "movie":
			// typeContent = "video.movie"
			typeTags = typeMeta.map(meta => (
				<meta
					property={"video.movie:" + meta.key}
					key={meta.key}
					content={meta.value}
				/>
			))
			break
		default:
			typeContent = defaultJSONLD
			break
	}

	typeContent.dateModified = new Date().toISOString()
	typeContent.datePublished = new Date().toISOString()
	typeContent.isAccessibleForFree = "True"
	typeContent["isPartOf"] = {
		"@type": ["CreativeWork", "Product", "Blog"],
		name: title,
		productID: siteUrl,
	}

	return (
		<React.Fragment>
			<Helmet defer={false}>
				<script type="application/ld+json">{JSON.stringify(typeContent)}</script>
			</Helmet>
		</React.Fragment>
	)
}

export default SchemaOrg
