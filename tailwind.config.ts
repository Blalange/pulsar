import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            primary: "var(--background-primary)",
            lighter: "var(--background-lighter)",
            "navbar-text-color": "var(--navbar-text-color)",
            "navbar-color": "var(--navbar-color)",
            "navbar-link-color": "var(--navbar-link-color)",
            "text-hover-color": "var(--navbar-link-hover-color)",
            input: "var(--input-background-color)",
            "input-text": "var(--input-text-color)",
            "input-border-color": "var(--input-border-color)",
            "dropdown-option-hover-color": "var(--dropdown-option-hover-color)",
            "border-color": "var(--border-color)",
            "logo-text": "var(--logo-text)",
            "logo-color": "var(--logo-color)",
            "text-color": "var(--text-color)",
        },
        fontFamily: {
            roboto: "var(--font-family), Roboto"
        },
        extend: {}
    },
	plugins: []
} satisfies Config;
