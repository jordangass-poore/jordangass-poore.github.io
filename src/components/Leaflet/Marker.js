import React from "react"
import Link from "gatsby-link"
import * as ReactLeaflet from "react-leaflet"
const { Map: LeafletMap, Marker, Popup } = ReactLeaflet

export default ({ position, targetSlug, locationName, style, children }) => {
	const clickFunction = e => {
		console.log(this, arguments, e)
	}
	// onOpen={clickFunction.bind({ id: "test" })}
	return (
		<Marker position={position} alt={locationName}>
			<Popup alt={targetSlug} data-target={targetSlug}>
				{children}
			</Popup>
		</Marker>
	)
}
