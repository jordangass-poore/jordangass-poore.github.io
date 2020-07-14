import React from "react"
import "../assets/stylesheets/components/_LocationClipSet.scss"
import Link from "gatsby-link"

export default ({
	id,
	className,
	locationName,
	clips,
	title,
	activeState,
	children,
}) => {
	const defaultClassName = "location-clip-set"
	let setClassName = `${defaultClassName}`
	if (className) {
		setClassName += ` ${className}`
	}
	let clipList = []
	let boxTitle = `Clips from ${locationName}`
	if (title) {
		boxTitle = title
	}
	if (clips && clips.length > 0) {
		clipList = clips.map(clip => {
			return (
				<li key={clip.id}>
					<Link to={"/" + "clip/" + clip.slug} key={clip.id}>
						{clip.title}
					</Link>
				</li>
			)
		})
	}

	if (activeState === id) {
		setClassName += " shown"
	} else {
		setClassName += " hidden"
	}

	return (
		<div id={id} className={setClassName} data-is-active={activeState}>
			<h3>{boxTitle}</h3>
			<div className="location-clip-set-comments">{children}</div>
			<div className="location-clip-set-inner">
				<ul>{clipList}</ul>
			</div>
		</div>
	)
}
