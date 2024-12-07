import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				ctgblue: '#2e4a61',
				ctgorange: '#f29559',
				ctgtan: '#b8b08d'
			},
			fontFamily: {
				fira: ['Fira Sans', 'sans-serif']
			}
		}
	},

	plugins: [forms]
} satisfies Config;
