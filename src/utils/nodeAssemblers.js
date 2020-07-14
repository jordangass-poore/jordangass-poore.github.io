const axios = require("axios")
const dotenv = require("dotenv")
const showdown = require("showdown")
dotenv.config()
const fs = require("fs")
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const crypto = require("crypto")
var fm = require("front-matter")
const { createCleanSlug } = require("./cleanSlugs")
const dataParsing = require("./dataParsing")

String.prototype.trunc =
	String.prototype.trunc ||
	function(n) {
		return this.length > n ? this.substr(0, n - 1) : this
	}

const fetchFormItems = function(targetFormUrl) {
	var formUrl = targetFormUrl ? targetFormUrl : process.env.CLIPS_SHEETS_URL
	return axios.get(formUrl)
}

const nodeAssemblers = {
	fetchAudioSite: audioSite => {
		const testUrl =
			"https://ktswblog.net/2014/03/24/sxsw-break-point-cast-and-crew-interview/"

		return axios.get(testUrl)
	},

	returnMarkdownObject: function(fileName) {
		// console.log('Markdown File to handle', fileName);
		var blobText = fs.readFileSync(fileName)
		var text = blobText.toString()
		if (text) {
			// showdown.extension('myext', myext);
			var converter = new showdown.Converter({
				strikethrough: true,
				simpleLineBreaks: false,
				simplifiedAutoLink: true,
				// extensions: [myext],
				metadata: true,
			})
			converter.setFlavor("github")
			try {
				// var html = md.render(text);
				var html = converter.makeHtml(text)
				var fmObj = fm(text)
				// var metadata = converter.getMetadata();
				var metadata = fmObj.attributes
				if (metadata && metadata.title) {
					metadata.title = metadata.title.replace(/&quot;/g, '"')
					if (metadata.title.charAt(0) == '"') {
						metadata.title = metadata.title.substr(1)
					}
					if (metadata.title.charAt(metadata.title.length - 1) == '"') {
						metadata.title = metadata.title.slice(0, -1)
					}
				}
				// console.log('Markdown metadata ', metadata);
				return { html: html, metadata: metadata }
			} catch (e) {
				console.log("Markdown Parser failed with ", e)
				return false
			}
		} else {
			return false
		}
	},

	getAudioObjs: async (audioSite, targetAudioLocation) => {
		const testAudioLocation = "audio.wp-audio-shortcode source"
		var audioLocation = targetAudioLocation
			? targetAudioLocation
			: testAudioLocation
		const response = await fetchSite(audioSite)
		// console.log('get HTML', response.data);
		const doc = new JSDOM(response.data)

		const audioObj = doc.window.document.querySelector(audioLocation)
		console.log("audio obj src", audioObj.src)
		var audioFilename = path.basename(audioObj.src)
		axios({
			method: "get",
			url: audioObj.src,
			responseType: "stream",
		}).then(function(response) {
			response.data.pipe(fs.createWriteStream("./public/" + audioFilename))
		})

		let rows = []

		return rows
	},

	getFormObjs: async aUrl => {
		const response = await fetchFormItems(aUrl)

		const arrayOfItems = response.data.valueRanges[0].values

		let rows = []
		for (var i = 1; i < arrayOfItems.length; i++) {
			var rowObject = {}
			for (var j = 0; j < arrayOfItems[i].length; j++) {
				rowObject[arrayOfItems[0][j]] = arrayOfItems[i][j]
			}
			rows.push(rowObject)
		}

		return rows
	},

	clipsObjDefaults: async clipObj => {
		var defaultObj = {
			title: "",
			date: "",
			isBasedOn: "",
			format: "text",
			topic: "Journalism",
			publishedBy: "",
			location: "Austin, TX",
			image: "Transparent-l.png",
			media: "",
			imageSource: "",
		}
		const newObj = Object.assign(defaultObj, clipObj)
		if (clipObj.Title) {
			newObj.title = clipObj.Title
			delete newObj.Title
		}
		if (newObj.title) {
			newObj.title = newObj.title.trim()
		}
		if (!newObj.description && newObj.summary) {
			newObj.description = newObj.summary
		}
		if (!newObj.description) {
			newObj.description = ""
		}
		if (clipObj["Date"]) {
			var dateObj = new Date(clipObj["Date"])
			newObj.date = dateObj.getTime()
			delete newObj["Date"]
			// console.log('capitalD date', newObj.date);
		} else if (clipObj.date) {
			var dateObj = new Date(clipObj.date)
			newObj.date = dateObj.getTime()
			delete newObj["Date"]
			// console.log('capitalD date', newObj.date);
		}
		if (typeof newObj.date != "number") {
			var dateObj = new Date(clipObj.date)
			newObj.date = dateObj.getTime()
			// console.log('bad number attempt', newObj.title, clipObj.date, newObj.date);
		}
		if (Number.isNaN(newObj.date)) {
			var dateObj = new Date("03/10/2014")
			newObj.date = dateObj.getTime()
			// console.log('NaN date resorting to default', newObj.title, clipObj.date, newObj.date);
			// console.log(JSON.stringify(clipObj));
		}
		if (typeof newObj.date != "number" || Number.isNaN(newObj.date)) {
			console.log("Date error", clipObj.date)
		}
		if (newObj.summary) {
			delete newObj["summary"]
		}
		newObj.topic = newObj.topic.trim()
		newObj.location = newObj.location.trim()
		delete newObj["Timestamp"]
		newObj.slug = createCleanSlug(newObj.title)
		newObj.format = newObj.format.trim()
		if (!newObj.format) {
			newObj.format = "text"
		}
		if (!newObj.image || newObj.image == "") {
			newObj.image = "Transparent-l.png"
		}
		newObj.imagePath = "./_image/" + newObj.image
		var defaultLocationObj = {
			location: {
				lat: 30.2711286,
				lng: -97.7436995,
			},
			placename: "Austin, TX, United States of America",
			geoMetadata: {
				country: "United States of America",
				areaType: "city",
				state: "Texas",
				state_code: "TX",
			},
		}
		if (
			newObj.location &&
			!Object.prototype.hasOwnProperty.call(newObj, "locationData")
		) {
			var locationData = await dataParsing.getLocDataString(newObj.location)
			if (locationData) {
				newObj.locationData = locationData
			} else {
				newObj.locationData = defaultLocationObj
			}
		} else if (!clipObj.location) {
			newObj.locationData = defaultLocationObj
		}
		// console.log('Article metadata newObj', newObj);
		return newObj
	},

	achievementsObjDefaults: achievementsObj => {
		var defaultObj = {
			title: "",
			date: "",
			isBasedOn: "",
			type: "Awards",
			affiliation: "",
			excerpt: "",
			image: "Transparent-l.png",
			media: "",
			imageSource: "",
			content: "",
			description: "",
		}
		const newObj = Object.assign(defaultObj, achievementsObj)
		if (achievementsObj["Additional Information"]) {
			newObj.content += " " + achievementsObj["Additional Information"]
			delete newObj["Additional Information"]
		}
		if (achievementsObj["Additional_Information"]) {
			newObj.content += " " + achievementsObj["Additional_Information"]
			delete newObj["Additional_Information"]
		}
		if (newObj.excerpt) {
			newObj.description += " " + newObj.excerpt
			delete newObj.excerpt
		}
		if (!newObj.description) {
			newObj.description = " "
		}
		newObj.type = newObj.type.trim()
		newObj.slug = createCleanSlug(newObj.title)
		delete newObj["Timestamp"]
		// console.log('Achievements metadata newObj', newObj);
		return newObj
	},
}

module.exports = { nodeAssemblers: nodeAssemblers }
