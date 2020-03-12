import Typography from 'typography';

const typography = new Typography({
	baseFontSize: '13px',
	background: '#fff',
	googleFonts: [
		{
			name: 'Playfair Display',
			styles: ['400'],
		},
		{
			name: 'EB Garamond',
			styles: ['400', '400i', '700'],
		},
	],
	bodyFontFamily: [
		"Helvetica Neue",
		"HelveticaNeue",
		"Helvetica",
		"Arial",
		"Lucida Grande",
		"sans-serif"
	],
	bodyFontSize: '1.3rem',
	bodyLineHeight: '18px',
	bodyColor: '#555',
	bodyPosition: 'relative',
	bodyFontSmoothing: 'antialiased',
	headerColor: '#181818',
	headerFontWeight: 'bold',
	headerLineHeight: '1.25'

});

export default typography;
