export default {
	// via https://www.freecodecamp.org/news/how-to-create-a-summer-road-clip-mapping-app-with-gatsby-and-leaflet/#id="step-1-cleaning-up-some-unneeded-code"
	createClipPointsGeoJson: function(clips) {
		return {
			type: "FeatureCollection",
			features: clips.map(
				({
					clip: {
						title,
						image,
						date,
						locationData: { placename, location = {} },
					},
				} = {}) => {
					const { lat, lng } = location
					const textData = [title]
					return {
						type: "Feature",
						properties: {
							placename,
							textData,
							date,
							image,
						},
						geometry: {
							type: "Point",
							coordinates: [lng, lat],
						},
					}
				}
			),
		}
	},

	/**
	 * getCurrentLocation
	 * @description
	 */

	getCurrentLocation: function() {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(
				pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
				err => reject(err)
			)
		})
	},
}
