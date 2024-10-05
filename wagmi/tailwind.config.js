/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"wagmi-blue": "#6676D2",
				"wagmi-white": "#fbf9f4",
				"wagmi-offwhite": "#f0f0f2",
			},
			fontFamily: {
				gilmer: ["gilmer", "sans-serif"],
				gilmerbold: ["gilmer-bold", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
};
