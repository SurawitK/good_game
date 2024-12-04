<script setup lang="ts">
	const languages = [
		[{ label: 'English' }, { label: 'ภาษาไทย' }],
	];
	/* 	const links = [
		{
			label: "Good Game",
			to: useLink({ to: "/" }),
		},

		{ label: "Sign Up", to: useLink({ to: "/signup" }) },
		{ label: "Login", to: useLink({ to: "/login" }) },
	];
	const items = ref([
		{ label: "Good Game", to: useLink({ to: "/" }) },
		{ label: "Sign Up", to: useLink({ to: "/signup" }) },
		{ label: "Login", to: useLink({ to: "/login" }) },
	]); */
</script>

<!-- <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" /> -->

<template>
	<header>
		<!-- <div>
			<UHorizontalNavigation
				:links="links"
				class="border-b border-gray-200 dark:border-gray-800"></UHorizontalNavigation>
		</div>
		<UIcon
			name="i-lucide-globe"
			class="w-5 h-5" /> -->
		<nav class="flex justify-between gap-4 p-6">
			<div class="flex gap-4">
				<NuxtLink
					class="font-custom"
					to="/"
					active-class="text-primary underline underline-offset-8"
					inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
					Good Game
				</NuxtLink>
				<NuxtLink
					class="font-custom"
					to="/"
					active-class="text-primary underline underline-offset-8"
					inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
					Link 2
				</NuxtLink>
				<NuxtLink
					class="font-custom"
					to="/"
					active-class="text-primary underline underline-offset-8"
					inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
					Link 3
				</NuxtLink>
			</div>

			<div class="flex items-center gap-6">
				<UDropdown
					:ui="{
						background: 'dark:bg-gray-600',
						item: { active: 'dark:bg-gray-400' },
						width: 'w-36',
					}"
					:items="languages"
					:popper="{ placement: 'bottom-end' }">
					<UButton
						icon="i-lucide-globe"
						color="white"
						variant="ghost" />
				</UDropdown>
				<!-- <UIcon
					@click="showSelect = !showSelect"
					v-motion
					:initial="{ scale: 1 }"
					:hovered="{ scale: 1.05 }"
					:tapped="{ scale: 0.95 }"
					:focused="{ scale: 1.05 }"
					name="i-lucide-globe"
					class="w-5 h-5 hover:opacity-50 cursor-pointer"
					tabindex="1" /> -->

				<!-- <div class="relative">
					<p class="fixed absolute top-0 bottom-0"></p>
				</div> -->

				<UButton
					v-motion
					:initial="{ scale: 1 }"
					:hovered="{ scale: 1.1 }"
					:tapped="{ scale: 1.15 }">
					Sign Up
				</UButton>
				<UButton
					variant="outline"
					v-motion
					:initial="{ scale: 1 }"
					:hovered="{ scale: 1.1 }"
					:tapped="{ scale: 1.15 }">
					Login
				</UButton>
			</div>
		</nav>

		<!-- <Placeholder class="h-32 bg-green-10" /> -->
	</header>
	<slot />
</template>
