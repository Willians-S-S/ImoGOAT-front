import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        'xt': '390px',
      },
      width: {
        '97p': '97%', // Adiciona a classe `w-95p` para `width: 95%`
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],  // Garantindo que Ubuntu esteja incluído
      },
      boxShadow: {
        custom: '0 8px 10px rgba(0, 0, 0, 0.75)'  // Adicionando sombra de texto personalizada
      },
      spacing: {
        '350px': '350px'  // Adicionando um valor específico de espaçamento
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
