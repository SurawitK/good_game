<script setup lang="ts">
	const languages = [
		[{ label: 'English' }, { label: 'ภาษาไทย' }],
	];
</script>

<template>
	<header>
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
	</header>
	<slot />
</template>
