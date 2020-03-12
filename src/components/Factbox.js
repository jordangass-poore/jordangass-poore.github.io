import React from 'react';
import styles from "../styles/glitchFrenchWave.module.css"

export default ({ boxTitle, children }) => (
	<div className={styles.factBox}>
		<div className={styles.sideHBox}>
			<h5>{boxTitle}</h5>
		</div>
		<div className={styles.factBoxInner}>{children}</div>
	</div>
);
