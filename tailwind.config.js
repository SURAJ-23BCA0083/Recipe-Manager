/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1F2937",
                secondary: "#F59E0B",
                accent: "#10B981",
                light: "#F9FAFB",
                dark: "#1F2937",
                neutral: "#6B7280",
            },
            fontFamily: {
                sans: ["Segoe UI", "Roboto", "Oxygen", "Ubuntu", "sans-serif"],
            },
            boxShadow: {
                card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                hover: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
            },
        },
    },
    plugins: [],
};
