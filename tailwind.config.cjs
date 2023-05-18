/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				ctgblue: '#2e4a61'
			},
			fontFamily: {
				fira: ['Fira Sans', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
