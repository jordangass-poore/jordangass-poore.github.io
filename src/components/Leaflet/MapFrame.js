import React, { useRef } from "react"
import PropTypes from "prop-types"
import * as ReactLeaflet from "react-leaflet"
const { Map: LeafletMap, TileLayer, ZoomControl } = ReactLeaflet
import { useMapServices, useRefEffect } from "../../hooks"
import { isDomAvailable } from "../../utils/domHandlers"
import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css"

const DEFAULT_MAP_SERVICE = "OpenStreetMap"

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet"

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

/**
 * https://github.com/colbyfayock/gatsby-starter-leaflet/blob/master/src/components/Map.js
 * https://www.freecodecamp.org/news/how-to-create-a-summer-road-trip-mapping-app-with-gatsby-and-leaflet/#id="step-1-cleaning-up-some-unneeded-code"
 *
 */

const MapFrame = props => {
	const {
		children,
		className = "",
		defaultBaseMap = DEFAULT_MAP_SERVICE,
		position,
		zoom,
		center,
		handlePopupOpen,
		handlePopupClose,
		...rest
	} = props

	const services = useMapServices({
		names: [...new Set([defaultBaseMap, DEFAULT_MAP_SERVICE])],
	})
	const basemap = services.find(service => service.name === defaultBaseMap)
	console.log("basemap config", basemap)

	let mapClassName = `map mapframe`

	if (className) {
		mapClassName = `${mapClassName} ${className}`
	}

	if (!isDomAvailable()) {
		console.log("Window not ready")
		return (
			<div className={mapClassName}>
				<p className="map-loading">Loading map...</p>
			</div>
		)
	}

	const mapSettings = {
		className: "map-base",
		zoomControl: false,
		...rest,
	}

	console.log("map settings", mapSettings)
	console.log("map children", children)

	return (
		<div className={mapClassName}>
			<LeafletMap
				position={position}
				center={center}
				zoom={zoom}
				id="mapframe-leaflet-map-component"
				style={{ height: "400px" }}
				onPopupClose={handlePopupClose}
				onPopupOpen={handlePopupOpen}
			>
				{children}

				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
				/>
			</LeafletMap>
		</div>
	)
}

MapFrame.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	defaultBaseMap: PropTypes.string,
	mapEffect: PropTypes.func,
}

export default MapFrame
