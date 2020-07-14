import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import queryTools from "../utils/queryParsing"
import FactBox from "../components/Factbox"
import { css } from "@emotion/core"
import styles from "../styles/glitchFrenchWave.module.css"
import Helmet from "react-helmet"
import SiteContainer from "../components/SiteContainer"

export default data => {
	// console.log("Data: ", data.data)
	console.log("FNW", styles)
	console.log("hpachiev", data.data.allAchievement.edges)
	var styleSet = [styles.fnwCard, styles.fullBox].join(" ")
	// {data.data.allFile.totalCount}
	var breakName = {
		__html: queryTools.resolveSiteMetadataEdge("bigName", data.data),
	}
	var lastBuildTime = new Date(
		queryTools.resolveSiteMetadataEdge("dateModified", data.data)
	).toDateString()
	return (
		<SiteContainer>
			<div id={styles.homepage}>
				<Helmet>
					<body className={styles.fnw} />
				</Helmet>
				<div className={styleSet}>
					<h2 className={styles.siteBreadCrumb}>
						{queryTools.resolveSiteMetadataEdge("title", data.data)}: Home Page
					</h2>
					<h1
						className={styles.homepageTitle}
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
												textDecoration: "none",
											}}
										>
											<h5>{node.childMarkdownRemark.frontmatter.title}</h5>
										</span>
									</li>
								</Link>
							))}
							<Link
								to="resume"
								style={{
									textDecoration: "none",
								}}
								key="resume"
							>
								<li key="resume-li">
									<span
										style={{
											textDecoration: "none",
										}}
									>
										<h5>Resume</h5>
									</span>
								</li>
							</Link>
							<Link
								to="map"
								style={{
									textDecoration: "none",
								}}
								key="map"
							>
								<li key="map-li">
									<span
										style={{
											textDecoration: "none",
										}}
									>
										<h5>Locations Covered</h5>
									</span>
								</li>
							</Link>
							<Link
								to="contact"
								style={{
									textDecoration: "none",
								}}
								key="contact"
							>
								<li key="contact-li">
									<span
										style={{
											textDecoration: "none",
										}}
									>
										<h5>Contact Me</h5>
									</span>
								</li>
							</Link>
						</ul>
						<div className={styles.informer}>
							{queryTools.resolveSiteMetadataEdge("intro", data.data)}
						</div>
						<div className={styles.meta}>
							Last Updated: <br /> {lastBuildTime}
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
									<li>
										<a href="https://twitter.com/jgasspoore" target="_blank">
											Twitter
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/jgasspoore/"
											target="_blank"
										>
											Instagram
										</a>
									</li>
									<li>
										<a
											href="https://www.facebook.com/jordanpodcasts/"
											target="_blank"
										>
											Facebook
										</a>
									</li>
								</ul>
							</FactBox>

							<FactBox boxTitle="Education">
								<ul>
									{data.data.allAchievement.edges.map(({ node }) => (
										<li key={node.id}>
											<Link
												to={"/achievement/" + node.achievement.slug}
												style={{
													textDecoration: "none",
												}}
												key={node.id}
											>
												<span
													style={{
														textDecoration: "underline",
														color: "var(--f-blue)",
													}}
												>
													<span>{node.achievement.title}</span>
												</span>
											</Link>
										</li>
									))}
								</ul>
							</FactBox>
						</div>
					</div>
				</div>
			</div>
		</SiteContainer>
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
						dateModified
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
		allAchievement(
			filter: {
				achievement: {
					type: { eq: "Education" }
					affiliation: { regex: "/Coll|Uni/" }
					title: { regex: "/Degree|Master|Bachelor/" }
				}
			}
		) {
			edges {
				node {
					id
					achievement {
						title
						slug
					}
				}
			}
		}
	}
`
