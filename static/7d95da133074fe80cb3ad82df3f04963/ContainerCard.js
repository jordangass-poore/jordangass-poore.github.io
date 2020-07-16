import React from "react"
import styles from "../styles/glitchFrenchWave.module.css"

export default ({ boxTitle, boxSubTitle, children, className }) => {
	const cardStyleSet = [styles.fnwCard]
	cardStyleSet.push(className)
	const cardStyle = cardStyleSet.join(" ")
	return (
		<div className={cardStyle}>
			<h4>{boxSubTitle}</h4>
			<h3>{boxTitle}</h3>
			<div className={styles.fnwCardInner}>{children}</div>
		</div>
	)
}
