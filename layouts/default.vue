<script setup lang="ts">
const links = [
	{
		label: "Good Game",
		to: "/",
	},

	{ label: "Sign Up", to: "/" },
	{ label: "Login", to: "/" },
];
</script>

<!-- <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" /> -->

<template>
	<header>
		<div>
      <UHorizontalNavigation
        :links="links"
        class="border-b border-gray-200 dark:border-gray-800">
      </UHorizontalNavigation>
    </div>
		<UIcon
			name="i-lucide-globe"
			class="w-5 h-5" />

		<!-- <Placeholder class="h-32 bg-green-10" /> -->
	</header>
	<slot />
</template>
