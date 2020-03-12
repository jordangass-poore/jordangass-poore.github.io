import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import queryTools from "../utils/queryParsing"
import FactBox from "../components/Factbox"
import { css } from "@emotion/core"
import styles from "../styles/glitchFrenchWave.module.css"

export default data => {
	// console.log("Data: ", data.data)
	console.log("FNW", styles)
	var styleSet = [styles.fnwBox, styles.fullBox].join(" ")
	// {data.data.allFile.totalCount}
	var breakName = {
		__html: queryTools.resolveSiteMetadataEdge("bigName", data.data),
	}
	var lastBuildTime = new Date()
	return (
		<div>
			<div className={styleSet}>
				<h2 className={styles.siteBreadCrumb}>
					{queryTools.resolveSiteMetadataEdge("title", data.data)}: Home Page
				</h2>
				<h1
					style={{
						color: "white",
						// fontSize: "140px",
						marginTop: "0",
						fontWeight: "500",
						fontSize: "12.5vw",
					}}
					dangerouslySetInnerHTML={breakName}
				></h1>
			</div>
			<div
				style={{
					//marginTop: "-6vw",
					zIndex: "50",
					position: "relative",
					margin: "-62px 0 0 15px",
					width: "calc(100% - 5% - 15px)",
				}}
			>
				<h4
					style={{
						color: "black",
						// fontSize: "140px",
						fontWeight: "500",
						fontSize: "24px",
						zIndex: "55",
						fontVariant: "all-small-caps",
						backgroundColor: "var(--f-overlay)",
						width: "fit-content",
						padding: "3px",
						marginBottom: "0",
					}}
				>
					Pages:
				</h4>
				<div className={styles.fnwMenuBox}>
					<ul>
						{data.data.allFile.nodes.map(node => (
							<Link
								to={node.fields.slug}
								style={{
									textDecoration: "none",
								}}
								key={node.childMarkdownRemark.id}
							>
								<li key={node.childMarkdownRemark.id}>
									<span
										style={{
											textDecoration: "underline",
										}}
									>
										<h5>{node.childMarkdownRemark.frontmatter.title}</h5>
									</span>
								</li>
							</Link>
						))}
					</ul>
					<div className={styles.informer}>
						{queryTools.resolveSiteMetadataEdge("intro", data.data)}
					</div>
					<div className={styles.meta}>
						Last Updated: <br /> {lastBuildTime.toDateString()}
					</div>
				</div>
			</div>
			<div className={styles.lowerFwBoxContainer}>
				<div className={styles.lowerFwBox}>
					<div className={styles.factBoxContainer}>

						<FactBox boxTitle="Location">
							<h6>I'm working in:</h6>
							<p>New York City, Washington DC, Philadelphia</p>
						</FactBox>

						<FactBox boxTitle="Other Sites">
							<ul>
								<li>Local Switchboard</li>
								<li>Book Club Girls</li>
								<li>Mother Jones</li>
								<li>NPR</li>
								<li>
									<a href="https://www.npr.org/sections/npr-extra/2016/05/06/476881707/npr-interns-present-off-mic-a-behind-the-scenes-report-about-how-radio-gets-done">
										NPR: Off Mic
									</a>
								</li>
							</ul>
						</FactBox>

						<FactBox boxTitle="Clips">
							<h6>Current Number:</h6>
							<p>{data.data.allClip.totalCount}</p>
						</FactBox>

						<FactBox boxTitle="Social">
							<h6>Follow Me:</h6>
							<ul>
								<li>Twitter</li>
								<li>Instagram</li>
								<li>Facebook</li>
							</ul>
						</FactBox>
					</div>
				</div>
			</div>
		</div>
	)
}

export const query = graphql`
	query siteMeta {
		__typename
		allSite {
			edges {
				node {
					siteMetadata {
						title
						description
						name
						bigName
						intro
					}
				}
			}
		}
		allFile(
			filter: {
				sourceInstanceName: { eq: "basePages" }
				fields: { slug: { ne: null } }
			}
		) {
			nodes {
				relativePath
				base
				name
				sourceInstanceName
				internal {
					type
					contentDigest
					description
					mediaType
				}
				fields {
					slug
				}
				childMarkdownRemark {
					id
					html
					frontmatter {
						title
					}
				}
			}
			totalCount
		}
		allClip {
			totalCount
		}
	}
`
