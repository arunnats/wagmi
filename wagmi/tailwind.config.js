/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"wagmi-blue": "#6676D2",
			},
		},
	},
	plugins: [],
};
