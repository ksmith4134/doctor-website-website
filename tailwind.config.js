/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/lib/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "noise": "url('/patterns/noise-5.png')",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
                hind: ["var(--font-hind)"]
            },
            colors: {
                "main-primary": "#A6D5EA",
                "main-secondary": "#6E8E9D",
                "main-tertiary": "#425371",
                "portfolio-primary": "#437FB8",
                "portfolio-secondary": "#3EB0B0",
                "portfolio-tertiary": "#E69886",
            },
        },
    },
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
