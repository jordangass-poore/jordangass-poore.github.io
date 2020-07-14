import React, { useState } from "react"
import allNodesStyles from "../styles/fwAllNodes.module.css"
import styles from "../styles/glitchFrenchWave.module.css"
import Link from "gatsby-link"
import Img from "gatsby-image"
import path from "path"

const PreviewImage = props => {
	var imageObject = props.aNode.fields.imgObj
	var previewImage, isFluid, origImage
	if (imageObject) {
		if (imageObject.childImageSharp && imageObject.childImageSharp.fluid) {
			previewImage = imageObject.childImageSharp.fluid
			isFluid = true
		} else if (imageObject.publicURL) {
			previewImage = imageObject.publicURL
		}
	}
	if (imageObject && imageObject.publicURL) {
		origImage = imageObject.publicURL
	}
	var previewEl = null
	if (previewImage && isFluid) {
		const previewImageObj = Object.assign(
			{ media: `(max-width: 300px)` },
			imageObject.childImageSharp.fluid
		)
		const sources = [previewImageObj]
		previewEl = <Img fluid={sources} alt="" className={styles.bbImageWrapper} />
	} else if (previewImage) {
		previewEl = (
			<img src={previewImage} alt="" className={styles.bbImageWrapper} />
		)
	} else {
		previewEl = <div className={styles.noImg}></div>
	}
	if (!origImage || typeof origImage !== 'string' || path.basename(origImage) == "Transparent-l.png") {
		previewEl = <div className={styles.noImg}></div>
	}

	return (
		<div
			data-orig-image={origImage}
			className={props.className}
			id={props.id}
			style={props.style}
		>
			{previewEl}
		</div>
	)
}

export default PreviewImage
