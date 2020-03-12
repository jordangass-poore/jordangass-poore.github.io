const axios = require("axios");
const dotenv = require("dotenv");
const showdown = require("showdown");
dotenv.config();
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const crypto = require("crypto");
var fm = require('front-matter');
const slugify = require('slugify');

String.prototype.trunc = String.prototype.trunc ||
	function (n) {
		return (this.length > n) ? this.substr(0, n - 1) : this;
	};

const fetchFormItems = function (targetFormUrl) {
	var formUrl = targetFormUrl ? targetFormUrl : process.env.CLIPS_SHEETS_URL;
	return axios.get(
		formUrl
	);
};

const createCleanSlug = function (aString) {
	var newString = ((slugify(aString)).replace(/\'/gi, "").replace(/\:/gi, ""));
	newString = (newString.toLowerCase()).replace(/\"/gi, '').replace(/\`/gi, "");
	newString = newString.replace(/\./g, '');
	var finalString = newString;
	if (newString.length > 70) {
		finalString = newString.substr(0, 68)
	} else {
		finalString = newString;
	}
	if (finalString.charAt(finalString.length - 1) == '-') {
		return finalString.substring(0, finalString.length - 2);
	} else {
		return finalString;
	}
	// return finalString;
}

const nodeAssemblers = {

	fetchAudioSite: (audioSite) => {
		const testUrl =
			"https://ktswblog.net/2014/03/24/sxsw-break-point-cast-and-crew-interview/";

		return axios.get(testUrl);
	},

	returnMarkdownObject: function (fileName) {
		// console.log('Markdown File to handle', fileName);
		var blobText = fs.readFileSync(fileName);
		var text = blobText.toString();
		if (text) {
			// showdown.extension('myext', myext);
			var converter = new showdown.Converter({
				strikethrough: true,
				simpleLineBreaks: false,
				// extensions: [myext],
				metadata: true
			});
			converter.setFlavor('original');
			try {
				// var html = md.render(text);
				var html = converter.makeHtml(text);
				var fmObj = fm(text);
				// var metadata = converter.getMetadata();
				var metadata = fmObj.attributes;
				if (metadata && metadata.title) {
					metadata.title = metadata.title.replace(/&quot;/g, '"');
					if (metadata.title.charAt(0) == '"') {
						metadata.title = metadata.title.substr(1);
					}
					if (metadata.title.charAt(metadata.title.length - 1) == '"') {
						metadata.title = metadata.title.slice(0, -1);
					}
				}
				// console.log('Markdown metadata ', metadata);
				return { html: html, metadata: metadata };
			} catch (e) {
				console.log('Markdown Parser failed with ', e)
				return false;
			}
		} else {
			return false;
		}
	},

	getAudioObjs: async (audioSite, targetAudioLocation) => {
		const testAudioLocation = "audio.wp-audio-shortcode source";
		var audioLocation = targetAudioLocation ? targetAudioLocation : testAudioLocation;
		const response = await fetchSite(audioSite);
		// console.log('get HTML', response.data);
		const doc = new JSDOM(response.data);

		const audioObj = doc.window.document.querySelector(audioLocation);
		console.log("audio obj src", audioObj.src);
		var audioFilename = path.basename(audioObj.src);
		axios({
			method: "get",
			url: audioObj.src,
			responseType: "stream"
		}).then(function (response) {
			response.data.pipe(fs.createWriteStream("./public/" + audioFilename));
		});

		let rows = [];

		return rows;
	},

	getFormObjs: async (aUrl) => {
		const response = await fetchFormItems(aUrl);

		const arrayOfItems = response.data.valueRanges[0].values;

		let rows = [];
		for (var i = 1; i < arrayOfItems.length; i++) {
			var rowObject = {};
			for (var j = 0; j < arrayOfItems[i].length; j++) {
				rowObject[arrayOfItems[0][j]] = arrayOfItems[i][j];
			}
			rows.push(rowObject);
		}

		return rows;
	},

	clipsObjDefaults: (clipObj) => {
		var defaultObj = {
			title: '',
			date: '',
			isBasedOn: '',
			format: 'text',
			topic: 'Journalism',
			publishedBy: '',
			location: 'Austin, TX',
			image: 'Transparent.gif',
			media: '',
			imageSource: ''
		};
		const newObj = Object.assign(defaultObj, clipObj);
		if (clipObj.Title) {
			newObj.title = clipObj.Title;
			delete newObj.Title;
		}
		if (!newObj.description && newObj.summary) {
			newObj.description = newObj.summary;
		}
		if (!newObj.description) {
			newObj.description = '';
		}
		if (clipObj['Date']) {
			var dateObj = new Date(clipObj['Date']);
			newObj.date = dateObj.getTime();
			delete newObj['Date'];
			// console.log('capitalD date', newObj.date);
		}
		if (typeof newObj.date != "number") {
			var dateObj = new Date(clipObj.date);
			newObj.date = dateObj.getTime();
			// console.log('bad number attempt', newObj.title, clipObj.date, newObj.date);
		}
		if (Number.isNaN(newObj.date)) {
			var dateObj = new Date('03/10/2014');
			newObj.date = dateObj.getTime();
			// console.log('NaN date resorting to default', newObj.title, clipObj.date, newObj.date);
			// console.log(JSON.stringify(clipObj));
		}
		if (typeof newObj.date != "number" || Number.isNaN(newObj.date)) {
			console.log('Date error', clipObj.date);
		}
		if (newObj.summary) {
			delete newObj['summary'];
		}
		newObj.topic = newObj.topic.trim();
		delete newObj['Timestamp'];
		slugify.extend({ "'": '' });
		newObj.slug = createCleanSlug(newObj.title);
		// console.log('Article metadata newObj', newObj);
		return newObj;

	},

	achievementsObjDefaults: (achievementsObj) => {
		var defaultObj = {
			title: '',
			date: '',
			isBasedOn: '',
			type: 'Awards',
			affiliation: '',
			excerpt: '',
			image: false,
			media: '',
			imageSource: '',
			content: '',
			description: ''
		};
		const newObj = Object.assign(defaultObj, achievementsObj);
		if (achievementsObj["Additional Information"]) {
			newObj.content = achievementsObj["Additional Information"];
		}
		if (achievementsObj["Additional_Information"]) {
			newObj.content = achievementsObj["Additional_Information"];
		}
		if (achievementsObj.content) {
			newObj.description = achievementsObj.content;
		} else if (newObj.excerpt) {
			newObj.description = newObj.excerpt;
		} else {
			newObj.description = newObj.title;
		}
		// console.log('Achievements metadata newObj', newObj);
		return newObj;

	},
}

module.exports = { nodeAssemblers: nodeAssemblers }
