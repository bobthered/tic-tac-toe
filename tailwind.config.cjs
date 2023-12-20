/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				blue: {
					50: '#f8fafb',
					100: '#eff1f6',
					200: '#dee4ed',
					300: '#c4cede',
					400: '#899dbd',
					500: '#546d96',
					600: '#3d4f6c',
					700: '#2c394e',
					800: '#1a212e',
					900: '#0d1117',
					950: '#070a0d'
				},
				slate: {
					50: '#f9fafb',
					100: '#f1f2f4',
					200: '#e2e4e9',
					300: '#cccfd7',
					400: '#989eae',
					500: '#676f83',
					600: '#4a505e',
					700: '#363a45',
					800: '#1f2228',
					900: '#101114',
					950: '#090a0b'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
