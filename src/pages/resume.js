import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import queryTools from "../utils/queryParsing"
import FactBox from "../components/Factbox"
import { css } from "@emotion/core"
import styles from "../styles/glitchFrenchWave.module.css"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import BreadCrumb from "../components/BreadCrumb"

export default data => {
	return (
		<Layout>
			<BreadCrumb
				style={{
					display: "block",
					float: "left",
					position: "absolute",
					top: "calc(3rem - 34px)",
					paddingLeft: "20px",
				}}
			>
				Resume
			</BreadCrumb>
			<h1>Resume</h1>
			<p>
				<a
					href="https://docs.google.com/document/d/1EQ4seKMht4-k3up_WeWqB8JYeP8Nc_0vIkHE8kM5T_w/edit?usp=sharing"
					target="_blank"
				>
					View my resume as a podcast producer
				</a>
				.
			</p>
			<p>
				<a
					href="https://docs.google.com/document/d/17ynCAOE6Za8UO_JCrVwZAV4eQGOobY6CTQySZlRbkX8/edit?usp=sharing"
					target="_blank"
				>
					View my resume as a journalist
				</a>
				.
			</p>
		</Layout>
	)
}
