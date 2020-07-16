import React from "react"
// import * as ReactLeaflet from "react-leaflet"
// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet
import MapFrame from "../components/Leaflet/MapFrame"
import Marker from "../components/Leaflet/Marker"
import LocationClipSet from "../components/LocationClipSet"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { createCleanSlug } from "../utils/cleanSlugs"
import SiteContainer from "../components/SiteContainer"
import styles from "../styles/glitchFrenchWave.module.css"
import BreadCrumb from "../components/BreadCrumb"

import "../assets/stylesheets/pages/_map.scss"

const clipsByLocation = function(gatsby) {
	const clipNodes = gatsby.data.allClip.nodes
	const locations = {}
	let locationCount = 0
	clipNodes.forEach(node => {
		if (node.clip.locationData && node.clip.locationData.placename) {
			node.clip.id = node.id
			if (locations[node.clip.locationData.placename]) {
				locations[node.clip.locationData.placename].clips.push(node.clip)
			} else {
				locations[node.clip.locationData.placename] = {
					geoData: node.clip.locationData,
					clips: [node.clip],
					idSlug: createCleanSlug(node.clip.locationData.placename),
				}
				locationCount += 1
			}
		}
	})
	// console.log(locations)
	return locations
}

export default class MyMap extends React.Component {
	constructor(gatsby) {
		super()
		this.state = {
			lat: 51.505,
			lng: -0.09,
			zoom: 3,
			activeClips: "default",
		}
		this.gatsby = gatsby
		this.handleClick.bind(this)
	}

	handleClick(activeClipsId) {
		this.setState(prevState => ({
			...prevState,
			activeClips: activeClipsId,
		}))
	}

	render() {
		// const position = [this.state.lat, this.state.lng]
		const position = [41.4533, -55.84]
		const locationClipSet = clipsByLocation(this.gatsby)
		const locationMarkers = []
		const locationBasedClips = []
		locationBasedClips.push(
			<LocationClipSet
				id="default"
				locationName="default"
				key="default"
				clips={[]}
				title="Select a marker on the map"
				activeState={this.state.activeClips}
			>
				<p>
					By clicking a location on the map you can see a list of clips reported
					about that area.
				</p>
			</LocationClipSet>
		)
		for (var aLocation in locationClipSet) {
			if (Object.prototype.hasOwnProperty.call(locationClipSet, aLocation)) {
				// do stuff
				var markerPositions = [
					locationClipSet[aLocation].geoData.location.lat,
					locationClipSet[aLocation].geoData.location.lng,
				]
				locationMarkers.push(
					<Marker
						position={markerPositions}
						key={locationClipSet[aLocation].geoData.placename}
						targetSlug={locationClipSet[aLocation].idSlug}
						locationName={locationClipSet[aLocation].geoData.placename}
					>
						Work in {locationClipSet[aLocation].geoData.placename}
					</Marker>
				)
				locationBasedClips.push(
					<LocationClipSet
						id={locationClipSet[aLocation].idSlug}
						key={locationClipSet[aLocation].idSlug}
						locationName={locationClipSet[aLocation].geoData.placename}
						clips={locationClipSet[aLocation].clips}
						activeState={this.state.activeClips}
					>
						<p>
							This is work done at or about{" "}
							{locationClipSet[aLocation].geoData.placename}
						</p>
					</LocationClipSet>
				)
			}
		}
		const handlePopupOpen = e => {
			console.log(e.popup.options["data-target"])
			this.handleClick(e.popup.options["data-target"])
		}
		const handlePopupClose = e => {
			console.log("Popup close")
			this.handleClick("default")
		}
		/**
		if (typeof window !== "undefined") {
			return (
				<LeafletMap center={position} zoom={this.state.zoom}>
					<Helmet
						style={[
							{
								cssText: `
										.leaflet-container {
											height: 400px;
											width: 100%;
										}
								`,
							},
						]}
					></Helmet>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</LeafletMap>
			)
		}
		return null
		 */
		console.log("State ", this.state)
		return (
			<SiteContainer id="map">
				<Helmet
					style={[
						{
							cssText: `
										.leaflet-container,  #mapframe-leaflet-map-component {
											height: 400px;
											width: 100%;
											display: block;
										}
								`,
						},
					]}
				></Helmet>
				<BreadCrumb
					style={{
						display: "block",
						float: "left",
						position: "absolute",
						top: "calc(3rem - 34px)",
						paddingLeft: "20px",
					}}
				>
					Clips by Location
				</BreadCrumb>
				<div className="map-page-grid-container">
					<div className="map-page-grid">
						<div className="map-page-grid__map">
							<MapFrame
								center={position}
								position={position}
								className="map-page-container"
								id="leaf-map"
								zoom={3}
								handlePopupClose={handlePopupClose}
								handlePopupOpen={handlePopupOpen}
							>
								{locationMarkers}
							</MapFrame>
						</div>
						<div className="map-page-grid__info">
							<div className="map-page-grid__info-inner">
								{locationBasedClips}
							</div>
						</div>
					</div>
				</div>
			</SiteContainer>
		)
	}
}

export const query = graphql`
	query MapGeoData {
		__typename
		allClip {
			nodes {
				clip {
					title
					topic
					slug
					location
					locationData {
						location {
							lat
							lng
						}
						placename
						geoMetadata {
							state
							continent
						}
					}
					description
					content
					publishedBy
				}
				id
			}
		}
	}
`
