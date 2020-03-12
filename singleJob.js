import React from "react"
import { graphql } from "gatsby"
import Job from "./src/components/Job"
import Helmet from "react-helmet"
import Role from "./src/utils/jsonld/Role"

const getJSONLD = data => {
	const configInfo = data.config
	const skillSet = []
	data.jobsJson.jobAccomplishments.forEach(jobAccomplishment => {
		if (jobAccomplishment.skills.length > 0) {
			jobAccomplishment.skills.forEach(element => {
				if (!skillSet.includes(element)) {
					skillSet.push(element)
				}
			})
		}
	})
	const responsibilities = data.jobsJson.jobAccomplishments.reduce(
		(accumulator, value) => {
			if (typeof accumulator !== "string") {
				accumulator = ""
			} else {
				accumulator += ", "
			}
			accumulator += value.content
			return accumulator
		}
	)
	const jsonLDAdditional = {
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": data.config.url + data.jobsJson.fields.slug,
		},
		hasOccupation: {
			"@type": "EmployeeRole",
			roleName: data.jobsJson.title,
			hasOccupation: {
				"@type": "Occupation",
				name: data.jobsJson.title,
				skills: skillSet,
				responsibilities: responsibilities,
				hiringOrganization: {
					"@type": "Organization",
					name: data.jobsJson.employer,
				},
			},
			startDate:
				data.jobsJson.startDate.year +
				"-" +
				data.jobsJson.startDate.month +
				"-" +
				data.jobsJson.startDate.day,
			endDate:
				data.jobsJson.endDate.year +
				"-" +
				data.jobsJson.endDate.month +
				"-" +
				data.jobsJson.endDate.day,
		},
	}
	return Role(configInfo, jsonLDAdditional)
}

// <div>{JSON.stringify(data)}</div>
export default ({ data }) => {
	const jsonLDFinal = JSON.stringify(getJSONLD(data))
	const valueTest = 2 + 2
	return (
		<div className="container">
			<Helmet>
				<title>
					{data.jobsJson.title}, {data.jobsJson.employer} - {data.config.name}
				</title>
				<meta name="description" content="A job" />
				<script type="application/ld+json">{jsonLDFinal}</script>
			</Helmet>
			<Job theJob={data.jobsJson}></Job>
		</div>
	)
}

export const query = graphql`
	query JobQuery($slug: String!) {
		jobsJson(fields: { slug: { eq: $slug } }) {
			startDate {
				day
				month
				year
			}
			endDate {
				day
				month
				year
			}
			employer
			location
			title
			jobAccomplishments {
				content
				skills
			}
			fields {
				slug
			}
		}
		config {
			name
			address
			url
		}
	}
`
