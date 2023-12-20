const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/sveltewind/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f8f5fe',
					100: '#eee7fe',
					200: '#dccffc',
					300: '#c1a8fa',
					400: '#8b5cf6',
					500: '#4b0cdf',
					600: '#3608a0',
					700: '#270674',
					800: '#170444',
					900: '#0b0222',
					950: '#070113'
				},
				secondary: {
					50: '#f5f9ff',
					100: '#e7f0fe',
					200: '#cee0fd',
					300: '#a7c7fb',
					400: '#3b82f6',
					500: '#0b5ce0',
					600: '#0842a1',
					700: '#063075',
					800: '#031c44',
					900: '#020e22',
					950: '#010813'
				},
				tertiary: {
					50: '#f5fdff',
					100: '#e6fbfe',
					200: '#cef6fd',
					300: '#a6effc',
					400: '#4de0f9',
					500: '#06b6d4',
					600: '#058ca3',
					700: '#046577',
					800: '#023b45',
					900: '#011e23',
					950: '#011114'
				},
				slate: {
					50: '#faf9fb',
					100: '#f2f1f4',
					200: '#e4e2e9',
					300: '#cfccd7',
					400: '#9f98ae',
					500: '#706783',
					600: '#504a5e',
					700: '#3b3645',
					800: '#221f28',
					900: '#111014',
					950: '#0a090b'
				},
				quartery: {
					50: '#f6fefb',
					100: '#e8fdf6',
					200: '#d0fbed',
					300: '#abf8de',
					400: '#56f0bd',
					500: '#13d896',
					600: '#10b981',
					700: '#0a714e',
					800: '#06422e',
					900: '#032117',
					950: '#02130d'
				},
				quinary: {
					50: '#fbfef6',
					100: '#f4fde8',
					200: '#eafad1',
					300: '#d9f6ac',
					400: '#b2ee59',
					500: '#84cc16',
					600: '#629810',
					700: '#476f0c',
					800: '#294107',
					900: '#152003',
					950: '#0c1202'
				},
				senary: {
					50: '#fffbf5',
					100: '#fef5e7',
					200: '#fdecce',
					300: '#fbdca7',
					400: '#f8ba4f',
					500: '#f59e0b',
					600: '#a26907',
					700: '#764c05',
					800: '#452c03',
					900: '#221601',
					950: '#140d01'
				},
				septenary: {
					50: '#fef6f6',
					100: '#fde8e8',
					200: '#fbd0d0',
					300: '#f8abab',
					400: '#ef4444',
					500: '#d81313',
					600: '#9b0d0d',
					700: '#710a0a',
					800: '#420606',
					900: '#210303',
					950: '#130202'
				},
				octonary: {
					50: '#fdf6fe',
					100: '#fae8fd',
					200: '#f5d0fb',
					300: '#edabf8',
					400: '#d946ef',
					500: '#be13d8',
					600: '#880d9b',
					700: '#630a71',
					800: '#3a0642',
					900: '#1d0321',
					950: '#100213'
				}
			}
		}
	},

	plugins: [
		plugin(({ addVariant }) => {
			addVariant('pwa', '@media all and (display-mode: standalone)');
		})
	]
};

module.exports = config;
