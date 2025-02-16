import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                lamaSky: "#A4D8F0", // Fundo suave, moderno, mais clean
                lamaSkyLight: "#E9F4FC", // Fundo mais claro, quase branco para um contraste suave
                lamaPurple: "#FFB84D", // Roxo mais escuro, ideal para detalhes ou botões
                lamaPurpleLight: "#C8A2FF", // Roxo claro, ótimo para hover ou destaque sutil
                lamaYellow: "#A7C7E7", // Amarelo mais suave e sofisticado
                lamaYellowLight: "#FFF3D1", // Amarelo claro, bem suave para fundos e efeitos
            },
        },
    },
    plugins: [],
};
export default config;
