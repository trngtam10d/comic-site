const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#5179ff",
                dark: "#1C1C1E",
            },
            fontFamily: {
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans]
            },
            gridTemplateColumns: {
                sm: "repeat(auto-fill, minmax(130px, 1fr))",
                lg: "repeat(auto-fill, minmax(160px, 1fr))",
            },
        },
    },
    plugins: [],
};