/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/images/logical_hero.webp')",
				'rectangle': "url('/images/rectangle.webp')",
			},
			colors: {
				principal: '#b91c1c',
				secondary: '#F3F3F3',
				principalDark: '#0D0D0D',
				secondaryDark: '#181818',
			}
		},
	},
	plugins: [],
}
