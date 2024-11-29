// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: [
		"@nuxt/ui",
		"nuxt-typed-router",
		"@vueuse/motion/nuxt",
		//  ["@nuxtjs/google-fonts", { families: { Parkinsans: true } }],
		"@nuxt/fonts",
	],
	fonts: { families: [{ name: "Parkinsans", provider: "google" }] },
});
