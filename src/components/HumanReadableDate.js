import React from "react"

Date.prototype.addHours = function(h) {
	this.setTime(this.getTime() + h * 60 * 60 * 1000)
	return this
}

export default ({ date }) => {
	var dateObj = new Date(date)
	// console.log(date, dateObj)
	// Adjust pure date input for GMT offset of Texas
	dateObj.addHours(5)
	var dateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "America/New_York",
	}
	var humanReadableDate = dateObj.toLocaleDateString("en-US", dateOptions)
	return <time dateTime={date}>{humanReadableDate}</time>
}
