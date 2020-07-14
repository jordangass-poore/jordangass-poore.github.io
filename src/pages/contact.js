import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
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
				Contact Me
			</BreadCrumb>
			<h1>Contact Me</h1>
			Email me at <span>jordan</span>
			<span> (at) </span>
			<span>j</span>
			<span>gasspoore</span>.com
		</Layout>
	)
}
