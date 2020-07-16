import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styles from "../styles/glitchFrenchWave.module.css"
import BreadCrumb from "../components/BreadCrumb"
import HumanReadableDate from "../components/HumanReadableDate"
import Helmet from "react-helmet"

export default ({ data, pageContext }) => {
	console.log("Data: ", data, pageContext)
	var previewImage = false
	var isFluid = false
	var achievementObj = data.achievement.achievement
	var queryResult = data.achievement
	var origImage = ""
	if (queryResult.fields.imgObj) {
		if (
			queryResult.fields.imgObj.childImageSharp &&
			queryResult.fields.imgObj.childImageSharp.fluid
		) {
			previewImage = queryResult.fields.imgObj.childImageSharp.fluid
			isFluid = true
		} else if (queryResult.fields.imgObj.publicURL) {
			previewImage = queryResult.fields.imgObj.publicURL
		}
	}
	if (queryResult.fields.imgObj && queryResult.fields.imgObj.publicURL) {
		origImage = queryResult.fields.imgObj.publicURL
	}
	var previewEl = null
	if (previewImage && isFluid) {
		previewEl = (
			<Img
				fluid={queryResult.fields.imgObj.childImageSharp.fluid}
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
	var originalContent, archivedContent, awardedBy
	try {
		if (achievementObj.affiliation) {
			awardedBy = (
				<h4 className="source-with-origin-url">
					From: <br /> {achievementObj.affiliation}
				</h4>
			)
			if (achievementObj.isBasedOn) {
				originalContent = (
					<span className={styles.clipLink}>
						<a href={achievementObj.isBasedOn}>View achievement</a>
					</span>
				)
			} else {
				originalContent = <span className={styles.clipLink}></span>
			}
		} else {
			publisherUrl = ""
			awardedBy = (
				<h4 className="source-without-origin-url">
					From: <br /> {achievementObj.affiliation}
				</h4>
			)
			originalContent = (
				<span className={styles.clipLink}>
					Original Achievement No Longer Available
				</span>
			)
		}
	} catch (e) {
		console.log("Achievement build error occured ", e)
		originalContent = <span></span>
	}
	var archiveFile = ""
	if (queryResult.mediaFile && queryResult.mediaFile.publicURL) {
		archiveFile = queryResult.mediaFile
	}
	if (achievementObj.media && archiveFile.publicURL) {
		archivedContent = (
			<span className={styles.clipLink}>
				<span className={styles.spacer}>|</span>
				<a
					href={archiveFile.publicURL}
					target="_blank"
					rel="noopener noreferrer"
				>
					Archived Achievement
				</a>
			</span>
		)
	} else {
		archivedContent = <span className={styles.clipLink}></span>
	}
	var awardDate
	if (achievementObj.date) {
		var humanReadableDate = <HumanReadableDate date={achievementObj.date} />
		awardDate = (
			<span>
				<strong>Occurred on</strong>
				<span>:</span> {humanReadableDate}
			</span>
		)
	} else {
		awardDate = <span></span>
	}
	var homeLink = (
		<Link to={"/" + achievementObj.type} key="clipsHomepage">
			<span
				style={{
					textDecoration: "underline",
				}}
			>
				All {achievementObj.type}
			</span>
		</Link>
	)
	var previousLink, nextLink
	if (pageContext.previous) {
		previousLink = (
			<Link
				to={"/achievement/" + pageContext.previous.slug}
				key={pageContext.previous.id}
				title={pageContext.previous.title}
			>
				<span
					style={{
						textDecoration: "underline",
					}}
				>
					Previous Achievement
				</span>
			</Link>
		)
	} else {
		previousLink = homeLink
	}
	if (pageContext.next) {
		nextLink = (
			<Link
				to={"/achievement/" + pageContext.next.slug}
				key={pageContext.next.id}
				title={pageContext.next.title}
			>
				<span
					style={{
						textDecoration: "underline",
					}}
				>
					Next Achievement
				</span>
			</Link>
		)
	} else {
		nextLink = homeLink
	}
	return (
		<Layout>
			<Helmet>
				<body className={styles.fnw} />
			</Helmet>
			<BreadCrumb
				style={{
					display: "block",
					float: "left",
					position: "absolute",
					top: "calc(3rem - 34px)",
					paddingLeft: "20px",
				}}
			>
				Achievement
			</BreadCrumb>
			<div id={queryResult.achievement.id} className={styles.blackOutBox}>
				<h1>{achievementObj.title}</h1>
				<div className={styles.flexRow}>
					<div className={styles.flexCol}>
						<div className={styles.bbDataHolder}>
							{originalContent} {archivedContent}
							<h2>About this achievement: </h2>
							{awardedBy}
							<div>
								{awardDate}
								<br />
								<br />
							</div>
							<div>
								<strong>About</strong>: {achievementObj.description}
								<hr />
								<div
									dangerouslySetInnerHTML={{ __html: achievementObj.content }}
								/>
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
	query($id: String!, $mediaName: String) {
		achievement(id: { eq: $id }) {
			id
			achievement {
				title
				date
				content
				affiliation
				type
				media
				description
				excerpt
				imageSource
				isBasedOn
				slug
			}
			fields {
				imgObj {
					id
					publicURL
					childImageSharp {
						fluid(maxWidth: 400) {
							...GatsbyImageSharpFluid
						}
					}
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
