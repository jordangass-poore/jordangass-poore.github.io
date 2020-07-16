import React from "react"
import allNodesStyles from "../styles/fwAllNodes.module.css"

const SortDown = props => {
	let pdStart = <option value="">All</option>
	let baseOfObject = props.baseOfObject
	let edgeParam = props.edgeParamter
	// TODO: Alphabatize this
	let topicPullDownLimited = props.edgeList.reduce(
		(accumulator, currentValue) => {
			if (!accumulator.includes(currentValue.node[baseOfObject][edgeParam])) {
				accumulator.push(currentValue.node[baseOfObject][edgeParam])
			}
			return accumulator
		},
		[]
	)
	topicPullDownLimited.sort()
	let pullDownList = topicPullDownLimited.map(currentValue => {
		return (
			<option
				value={currentValue.toLowerCase()}
				key={currentValue.toLowerCase()}
			>
				{currentValue}
			</option>
		)
	})

	const nameOfSort = edgeParam

	return (
		<div className={allNodesStyles.formDropdown}>
			<label className={allNodesStyles.capitalize} htmlFor={`${edgeParam}s`}>{nameOfSort}: </label>
			<select id={`${edgeParam}s`} onChange={e => props.handleChange(e)}>
				{pdStart}
				{pullDownList}
			</select>
		</div>
	)
}

export default SortDown
