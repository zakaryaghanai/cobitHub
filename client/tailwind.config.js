module.exports = {
    important: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            textDecoration: ["active", "peer"],
            colors: {
                primary: "#5951d4",
                secondary: "#fff",
                "text-primary": "#1e293b",
                label: "#515e79",
                "input-placeholder": "#7a7a7a",
                "input-icon": "#515e79",
                "text-accent": "#7188b2",
                error: "#f37070",
                "main-bg": "#f8f8f9",
                input: "#fdfdfd",
                a: "#40a9ea",
                card: "#fff",
            },
            borderRadius: {
                default: "3px",
            },
            gridTemplateRows: {
                app: "80px 1fr",
            },
        },
    },
    plugins: [],
};
