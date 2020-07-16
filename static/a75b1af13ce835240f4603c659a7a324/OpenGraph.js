import React from "react"
import Helmet from "react-helmet"

const OpenGraph = props => {
	const {
		url,
		title,
		description,
		image,
		fbAppId,
		isType,
		siteName,
		typeMeta,
		keywords,
	} = props
	let typeContent = ""
	let typeTags = null
	switch (isType) {
		case "website":
			typeContent = "website"
			break
		case "article":
		case "blog":
		case "NewsArticle":
			typeContent = "article"
			typeTags = Object.keys(typeMeta).map(key => (
				<meta property={"article:" + key} key={key} content={typeMeta[key]} />
			))
			keywords.forEach(tag => {
				typeTags.push(
					<meta
						property="article:tag"
						key={"article-tag-" + tag}
						content={tag}
					/>
				)
			})
			break
		case "profile":
			typeContent = "profile"
			typeTags = Object.keys(typeMeta).map(key => (
				<meta property={"profile:" + key} key={key} content={typeMeta[key]} />
			))
			break
		case "place":
			typeContent = "place"
			break
		case "book":
			typeContent = "book"
			typeTags = Object.keys(typeMeta).map(key => (
				<meta property={"book:" + key} key={key} content={typeMeta[key]} />
			))
			keywords.forEach(tag => {
				typeTags.push(
					<meta property="book:tag" key={"book-tag-" + tag} content={tag} />
				)
			})
			break
		case "books.author":
			typeContent = "books.author"
			break
		case "books.quotes":
			typeContent = "books.quotes"
			break
		case "song":
			typeContent = "music.song"
			typeTags = Object.keys(typeMeta).map(key => (
				<meta
					property={"music.song:" + key}
					key={key}
					content={typeMeta[key]}
				/>
			))
			break
		case "album":
			typeContent = "music.album"
			typeTags = Object.keys(typeMeta).map(key => (
				<meta
					property={"music.album:" + key}
					key={key}
					content={typeMeta[key]}
				/>
			))
			break
		case "playlist":
			typeContent = "music.playlist"
			break
		case "radio_station":
			typeContent = "music.radio_station"
			break
		case "movie":
			typeContent = "video.movie"
			typeTags = Object.keys(typeMeta).map(key => (
				<meta
					property={"video.movie:" + key}
					key={key}
					content={typeMeta[key]}
				/>
			))
			break
		default:
			typeContent = "website"
			break
	}

	return (
		<React.Fragment>
			<Helmet defer={false}>
				<meta property="og:url" content={url} />
				<meta property="og:type" content={typeContent} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				{fbAppId ? <meta property="fb:app_id" content={fbAppId} /> : null}
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content={siteName} />
				{typeTags}
			</Helmet>
		</React.Fragment>
	)
}

export default OpenGraph
