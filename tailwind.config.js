/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0F172A",
                accent: "#F59E0B",
                // Adding the blue from the founder's image as a custom color
                'founder-blue': '#4A6FA5',
            },
            fontFamily: {
                sans: ['var(--font-outfit)', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/images/hero_bg.jpg')",
            }
        },
    },
    plugins: [],
}
