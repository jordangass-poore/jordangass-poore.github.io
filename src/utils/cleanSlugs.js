const slugify = require("slugify")

const createCleanSlug = function(aString) {
	slugify.extend({ "'": "" })
	var newString = slugify(aString)
		.replace(/\'/gi, "")
		.replace(/\:/gi, "")
	newString = newString
		.toLowerCase()
		.replace(/\"/gi, "")
		.replace(/\`/gi, "")
	newString = newString
		.replace(/\./g, "")
		.replace(/\(/gi, "")
		.replace(/\)/gi, "")
	var finalString = newString
	if (newString.length > 70) {
		finalString = newString.substr(0, 68)
	} else {
		finalString = newString
	}
	if (finalString.charAt(finalString.length - 1) == "-") {
		return finalString.substring(0, finalString.length - 2)
	} else {
		return finalString
	}
	// return finalString;
}

module.exports = { createCleanSlug: createCleanSlug }
