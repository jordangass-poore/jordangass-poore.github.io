const axios = require("axios")
const dotenv = require("dotenv")
const fs = require("fs")
dotenv.config()

const getCachedLocByString = encodedString => {
	const cachedLocs = JSON.parse(
		fs.readFileSync(__dirname + "/../../_locations/location-cache.json")
	)
	const locationFound = cachedLocs.locations.filter(location => {
		if (Object.prototype.hasOwnProperty.call(location, encodedString)) {
			return true
		} else {
			return false
		}
	})
	if (
		locationFound &&
		locationFound.length > 0 &&
		locationFound[0][encodedString]
	) {
		return locationFound[0][encodedString]
	} else {
		return false
	}
}

const setCachedLocByString = (key, locObj) => {
	const cachedLocs = JSON.parse(
		fs.readFileSync(__dirname + "/../../_locations/location-cache.json")
	)
	const keyedLocObj = {}
	keyedLocObj[key] = locObj
	const locationFound = cachedLocs.locations.filter(location => {
		if (Object.prototype.hasOwnProperty.call(location, key)) {
			return true
		} else {
			return false
		}
	})
	// console.log("location found from API, caching", locObj)
	if (locationFound.length >= 1) {
		// console.log("Location already present", locationFound)
		return true
	} else {
		// console.log("location needs to be written")
	}
	cachedLocs.locations.push(keyedLocObj)
	return fs.writeFileSync(
		__dirname + "/../../_locations/location-cache.json",
		JSON.stringify(cachedLocs)
	)
}

const getLocDataString = async locationString => {
	const uriComponentLocation = encodeURIComponent(locationString)
	const cacheCheck = getCachedLocByString(uriComponentLocation)
	// console.log("getLocDataString", uriComponentLocation)
	if (false !== cacheCheck) {
		// console.log("Location cached")
		return cacheCheck
	}
	try {
		console.log(
			"Location Not Cached for ",
			locationString,
			uriComponentLocation
		)
		var apiString =
			"https://api.opencagedata.com/geocode/v1/json?" +
			"q=" +
			uriComponentLocation +
			"&key=" +
			process.env.OPENCAGE_API_KEY
		const response = await axios.get(apiString)
		if (response.data.results && response.data.results.length >= 1) {
			const fullData = response.data.results[0]
			const locObj = {
				location: {
					lat: fullData.geometry.lat,
					lng: fullData.geometry.lng,
				},
				placename: fullData.formatted,
				geoMetadata: {
					areaType: fullData.components._type,
					continent: fullData.components.continent,
					country: fullData.components.country,
					county: fullData.components.county,
					state: fullData.components.state,
					state_code: fullData.components.state_code,
					DMS: fullData.annotations.DMS,
					Mercator: fullData.annotations.Mercator,
					flag: fullData.annotations.flag,
					timezone: fullData.annotations.timezone,
					what3words: fullData.annotations.what3words.words.split("."),
					wikidataID: fullData.annotations.wikidata,
				},
			}
			setCachedLocByString(uriComponentLocation, locObj)
			// console.log("Location retrieved from API")
			return locObj
		} else {
			console.log(
				"Location could not be retrieved from API",
				apiString,
				response
			)
			return false
		}
	} catch (e) {
		console.log("retrieval failed for location", e)
		return false
	}
}

module.exports = { getLocDataString }
