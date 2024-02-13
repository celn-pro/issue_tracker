/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
		 fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
	},
	screens: {
      'max-800': {'max': '800px'},
	  'max-1200':{'min': '1200px'}
    }
  },
  plugins: [],
}