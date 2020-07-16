import React from "react"
import styles from "../styles/glitchFrenchWave.module.css"
import Link from "gatsby-link"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default ({ style, children }) => {
	const { title } = useSiteMetadata()
	return (
		<h2 className={styles.siteBreadCrumb} style={style}>
			<Link to={"/"} key="homepage" className={styles.minimalLink}>
				{title}
			</Link>
			: <span>{children}</span>
		</h2>
	)
}
