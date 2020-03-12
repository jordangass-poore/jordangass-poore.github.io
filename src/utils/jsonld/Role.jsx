import React from 'react';
import ConfigOrigin from '../../../config';

/**
 *
		"author": {
			"@type": "Person",
			"name": ConfigOrigin.name,
			"description": ConfigOrigin.description,
			"sameAs": ConfigOrigin.url,
			"image": {
				"@type": "ImageObject",
				"url": ConfigOrigin.image
			},
			"givenName": ConfigOrigin.givenName,
			"familyName": ConfigOrigin.familyName,
			"alternateName": ConfigOrigin.alternateName,
		},
 */

export default (config, jsonldChildren) => {
	/* eslint-disable */
	/* tslint-disable */
	const schemaObject = {
		"@context": "http://schema.org",
		"@type": "Person",
		"name": ConfigOrigin.name,
		"description": ConfigOrigin.description,
		"sameAs": ConfigOrigin.url,
		"image": {
			"@type": "ImageObject",
			"url": ConfigOrigin.image
		},
		"givenName": ConfigOrigin.givenName,
		"familyName": ConfigOrigin.familyName,
		"alternateName": ConfigOrigin.alternateName,
		"image": [
		],
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": ConfigOrigin.url
		},
		"hasOccupation": {
			"@type": "Occupation"
		}
	};
	const finalSchemaObject = Object.assign(schemaObject, jsonldChildren);
	return finalSchemaObject;
	/* tslint-enable */
	/* eslint-enable */
};
