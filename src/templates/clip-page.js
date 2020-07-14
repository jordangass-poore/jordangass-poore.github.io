import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styles from "../styles/glitchFrenchWave.module.css"
import BreadCrumb from "../components/BreadCrumb"
import SEO from "../components/SEO"
import HumanReadableDate from "../components/HumanReadableDate"

export default ({ data, pageContext }) => {
	console.log("Data: ", data, pageContext)
	var previewImage = false
	var isFluid = false
	var clipObj = data.clip.clip
	var queryResult = data
	var origImage = ""
	if (queryResult.previewImage) {
		if (
			queryResult.previewImage.childImageSharp &&
			queryResult.previewImage.childImageSharp.fluid
		) {
			previewImage = queryResult.previewImage.childImageSharp.fluid
			isFluid = true
		} else if (queryResult.previewImage.publicURL) {
			previewImage = queryResult.previewImage.publicURL
		}
	}
	if (queryResult.previewImage && queryResult.previewImage.publicURL) {
		origImage = queryResult.previewImage.publicURL
	}
	var previewEl = null
	if (previewImage && isFluid) {
		const previewImageObj = Object.assign(
			{
				media: `(max-width: 400px)`,
				key: queryResult.previewImage.childImageSharp.id,
			},
			queryResult.previewImage.childImageSharp.fluid
		)
		const sources = [previewImageObj]
		previewEl = (
			<Img
				key={queryResult.previewImage.childImageSharp.id}
				fluid={sources}
				alt=""
				className={styles.bbImageWrapper}
			/>
		)
	} else if (previewImage) {
		previewEl = (
			<img src={previewImage} alt="" className={styles.bbImageWrapper} />
		)
	} else {
		previewEl = <div className={styles.noImg}></div>
	}

	var publisherUrl = ""
	var originalContent, archivedContent, publishedBy
	try {
		if (clipObj.isBasedOn) {
			const theSourceUrl = new URL(clipObj.isBasedOn)
			publisherUrl = theSourceUrl.origin
			publishedBy = (
				<h4 className="source-with-origin-url">
					Published by: <br />{" "}
					<a href={publisherUrl} target="_blank" rel="noopener noreferrer">
						{clipObj.publishedBy}
					</a>
				</h4>
			)

			originalContent = (
				<span className={styles.clipLink}>
					<a href={clipObj.isBasedOn} target="_blank" rel="noopener noreferrer">
						View clip
					</a>
				</span>
			)
		} else {
			publisherUrl = ""
			publishedBy = (
				<h4 className="source-without-origin-url">
					Published by: <br /> {clipObj.publishedBy}
				</h4>
			)
			originalContent = (
				<span className={styles.clipLink}>
					Original Clip No Longer Available
				</span>
			)
		}
	} catch (e) {
		console.log("Clip build error occured ", e)
		publishedBy = <span></span>
		originalContent = <span></span>
	}
	var archiveFile = ""
	if (queryResult.mediaFile && queryResult.mediaFile.publicURL) {
		archiveFile = queryResult.mediaFile
	}
	if (clipObj.media && archiveFile.publicURL) {
		archivedContent = (
			<span className={styles.clipLink}>
				<span className={styles.spacer}>|</span>
				<a
					href={archiveFile.publicURL}
					target="_blank"
					rel="noopener noreferrer"
				>
					Archived Clip
				</a>
			</span>
		)
	} else {
		archivedContent = <span className={styles.clipLink}></span>
	}
	var humanReadableDate = <HumanReadableDate date={clipObj.date} />
	var homeLink = (
		<Link to={"/clips"} key="clipsHomepage">
			<span
				style={{
					textDecoration: "underline",
				}}
			>
				All Clips
			</span>
		</Link>
	)
	var previousLink, nextLink
	if (pageContext.previous) {
		previousLink = (
			<Link
				to={"/clip/" + pageContext.previous.slug}
				key={pageContext.previous.id}
				title={pageContext.previous.title}
			>
				<span
					style={{
						textDecoration: "underline",
					}}
				>
					Previous Clip
				</span>
			</Link>
		)
	} else {
		previousLink = homeLink
	}
	if (pageContext.next) {
		nextLink = (
			<Link
				to={"/clip/" + pageContext.next.slug}
				key={pageContext.next.id}
				title={pageContext.next.title}
			>
				<span
					style={{
						textDecoration: "underline",
					}}
				>
					Next Clip
				</span>
			</Link>
		)
	} else {
		nextLink = homeLink
	}
	let defaultDescription = false
	if (!clipObj.description && !clipObj.content && !clipObj.description) {
		defaultDescription = "Work by"
	}
	var isType = "website"
	switch (clipObj.format) {
		case "text":
			isType = "NewsArticle"
			if (clipObj.topic === "Opinion" || clipObj.topic === "PR") {
				isType = "article"
			}
			break

		default:
			isType = "website"
			break
	}
	return (
		<Layout>
			<SEO
				postMeta={clipObj}
				postDefaults={{ description: defaultDescription }}
				postPath={"clip/" + clipObj.slug}
				isType={isType}
				typeMeta={{
					isBasedOn: clipObj.isBasedOn,
					publisher: publisherUrl,
					publisher_name: clipObj.publishedBy,
				}}
			/>
			<BreadCrumb
				style={{
					display: "block",
					float: "left",
					position: "absolute",
					top: "calc(3rem - 34px)",
					paddingLeft: "20px",
				}}
			>
				Clip
			</BreadCrumb>
			<div id={queryResult.clip.id} className={styles.blackOutBox}>
				<h1>{clipObj.title}</h1>
				<div className={styles.flexRow}>
					<div className={styles.flexCol}>
						<div className={styles.bbDataHolder}>
							{originalContent} {archivedContent}
							<h2>About this clip: </h2>
							{publishedBy}
							<div>
								<strong>Location Published</strong>: {clipObj.location}
								<br />
								<br />
								<strong>Published on</strong>: {humanReadableDate}
								<br />
								<br />
								<strong>Topic</strong>: {clipObj.topic}
								<br />
								<br />
							</div>
							<div>
								<strong>Summary</strong>: {clipObj.description}
								<hr />
								<div dangerouslySetInnerHTML={{ __html: clipObj.content }} />
								<br />
								<br />
							</div>
						</div>
					</div>
					<div data-img={origImage} className={styles.flexCol}>
						{previewEl}
					</div>
				</div>
			</div>
			<BreadCrumb
				style={{
					display: "block",
					float: "left",
					position: "relative",
					marginTop: "3rem",
					paddingLeft: "20px",
					lineHeight: "4px",
					paddingBottom: "12px",
				}}
			>
				{previousLink} | {nextLink}
			</BreadCrumb>
		</Layout>
	)
}

export const query = graphql`
	query($id: String!, $mainImage: String, $mediaName: String) {
		clip(id: { eq: $id }) {
			id
			clip {
				date
				content
				format
				description
				image
				imageSource
				isBasedOn
				location
				publishedBy
				media
				slug
				title
				topic
			}
		}
		previewImage: file(relativePath: { glob: $mainImage }) {
			absolutePath
			publicURL
			childImageSharp {
				fluid(maxWidth: 400) {
					src
				}
				id
			}
		}
		mediaFile: file(
			sourceInstanceName: { eq: "media" }
			relativePath: { eq: $mediaName }
		) {
			publicURL
			fields {
				slug
			}
		}
	}
`
