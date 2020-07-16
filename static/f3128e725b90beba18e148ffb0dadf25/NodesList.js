import React, { useState } from "react"
import allNodesStyles from "../styles/fwAllNodes.module.css"
import styles from "../styles/glitchFrenchWave.module.css"
import Link from "gatsby-link"
import PreviewImage from "./PreviewImage"
import SortDown from "../components/SortDown"
import HumanReadableDate from "../components/HumanReadableDate"

const NodesList = props => {
	const emptyQuery = ""
	const emptyTopicQuery = ""
	const emptyFormatQuery = ""

	const [state, setState] = useState({
		filteredData: [],
		query: emptyQuery,
		topicQuery: emptyTopicQuery,
		formatQuery: emptyFormatQuery,
	})


	let { edgeList, style, className, baseOfLink, baseOfObject } = props

	const colorWheel = {
		1: "teal",
		2: "dark-green",
		3: "purple",
		4: "bright-yellow",
		5: "dark-blue",
		6: "orange-gray",
		7: "off-black",
		8: "off-white",
		9: "dark-red",
		10: "blue",
		0: "blue",
	}
	// TODO: Add sort by publication
	return (
		<div style={style} className={className}>
			<div id={allNodesStyles.nodeSortContainer}>
				<input
					type="text"
					aria-label="Search"
					placeholder="Type to filter posts..."
					onChange={e => props.handleInputChange(e)}
					className={allNodesStyles.formInput}
				/>
				{props.sorters}
			</div>
			<ul className={allNodesStyles.nodeSetContainer}>
				{edgeList.map(node => (
					<li
						key={node.node.id}
						className={allNodesStyles.nodeSingle}
						style={{
							backgroundColor:
								"var(--f-" + colorWheel[Math.round(Math.random() * 10)] + ")",
							transform:
								"rotate(" +
								Math.round(Math.random() * 10) *
								(Math.random() > 0.5 ? 1 : -1) +
								"deg)",
						}}
					>
						<Link
							to={"/" + baseOfLink + node.node[baseOfObject].slug}
							key={node.node.id}
						>
							<PreviewImage
								aNode={node.node}
								className={allNodesStyles.listImage}
							/>
							<span
								style={{
									textDecoration: "underline",
								}}
							>
								<h5>{node.node[baseOfObject].title}</h5>
								{props.extraFields.map(({ key, pretext }) => {
									if (node.node[baseOfObject][key]) {
										let content = node.node[baseOfObject][key]
										if (key === "date") {
											content = <HumanReadableDate date={content} />
										}
										return (
											<h6 key={key + "_" + node.node.id}>
												{pretext}
												{content}
											</h6>
										)
									}
								})}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default NodesList
