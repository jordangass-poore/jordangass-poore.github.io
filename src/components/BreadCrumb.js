import React from 'react';
import styles from "../styles/glitchFrenchWave.module.css"

export default ({ siteTitle, lastPart, style }) => (
	<h2 className={styles.siteBreadCrumb} style={style}>
		{siteTitle}: {lastPart}
	</h2>
)
