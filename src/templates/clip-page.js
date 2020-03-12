import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styles from "../styles/glitchFrenchWave.module.css"
import BreadCrumb from "../components/BreadCrumb"
import queryTools from "../utils/queryParsing"

export default data => {
	// console.log("Data: ", data.data)
	var previewImage = false
	var isFluid = false
	var clipObj = data.data.clip.clip
	var origImage = ""
	if (data.data.previewImage) {
		if (
			data.data.previewImage.childImageSharp &&
			data.data.previewImage.childImageSharp.fluid
		) {
			previewImage = data.data.previewImage.childImageSharp.fluid
			isFluid = true
		} else if (data.data.previewImage.publicURL) {
			previewImage = data.data.previewImage.publicURL
		}
	}
	if (data.data.previewImage && data.data.previewImage.publicURL) {
		origImage = data.data.previewImage.publicURL
	}
	var previewEl = null
	if (previewImage && isFluid) {
		previewEl = (
			<Img fluid={previewImage} alt="" className={styles.bbImageWrapper} />
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
					<a href={clipObj.isBasedOn}>View clip</a> |
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
					Original Clip No Longer Available |
				</span>
			)
		}
	} catch (e) {
		console.log('Clip build error occured ', e);
		publishedBy = (<span></span>)
		originalContent = (<span></span>)
	}
	var archiveFile = ""
	if (data.data.mediaFile && data.data.mediaFile.publicURL) {
		archiveFile = data.data.mediaFile;
	}
	if (clipObj.media) {
		archivedContent = (
			<span className={styles.clipLink}>
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
	var dateObj = new Date(clipObj.date);
	var dateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	}
	var humanReadableDate = dateObj.toLocaleDateString("en-US", dateOptions)
	return (
		<Layout>
			<BreadCrumb
				siteTitle={queryTools.resolveSiteMetadataEdge("title", data.data)}
				lastPart="Clip"
				style={{
					display: "block",
					float: "left",
					position: "absolute",
					top: "calc(3rem - 34px)",
					paddingLeft: "20px",
				}}
			></BreadCrumb>
			<div id={data.data.clip.id} className={styles.blackOutBox}>
				<h1>{data.data.clip.clip.title}</h1>
				<div className={styles.flexRow}>
					<div className={styles.flexCol}>
						<div className={styles.bbDataHolder}>
							{originalContent} {archivedContent}
							<h2>About this clip: </h2>
							{publishedBy}
							<div>
								<strong>Location Published</strong>: {clipObj.location}
								<br /><br />
								<strong>Published on</strong>: {humanReadableDate}
								<br />
								<br />
							</div>
							<div>
								<strong>About</strong>: {clipObj.description}
								<hr />
								{clipObj.content}
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
		</Layout>
	)
}

export const query = graphql`
	query($id: String!, $mainImage: String, $mediaName: String) {
		allSite {
			edges {
				node {
					siteMetadata {
						title
					}
				}
			}
		}
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
