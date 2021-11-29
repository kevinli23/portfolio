export const lightColors = {
	landingBGColor: '#E0FBFC',
	landingHighlight: '#EE6C4D',
	landingTextColor: '#293241',
	landingSecondaryTextColor: '#3D5A80',
	landingTertiaryTextColor: '#005b96',
	font: 'Helvetica, sans-serif',
};

export const darkColors = {
	landingBGColor: '#1D1F21',
	landingHighlight: '#db2d20',
	landingTextColor: '#C5C8C6',
	landingSecondaryTextColor: '#807d7c',
	landingTertiaryTextColor: '#01a252',
	font: '"Share Tech", sans-serif',
};

export function getColor(item, mode) {
	return lightColors[item];
}
