/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#17AF26",
                secondary: "#05422C",
                "neutral-400": "#F4F4F4",
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(to bottom, #FFFFFF 90%, #F2F6F4 100%)',
            },
            backgroundSize: {
                "50%": "50%",
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
};
