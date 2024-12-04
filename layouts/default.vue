<script setup lang="ts">
	const links = [];

	const languages = [
		[{ label: 'English' }, { label: 'ภาษาไทย' }],
	];
</script>

<template>
	<UHeader>
		<template #logo>
			<Logo class="w-auto h-6" />
			<ULink
				class="font-custom"
				to="/"
				active-class="text-primary underline underline-offset-8"
				inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
				Good Game
			</ULink>
		</template>

		<template #right>
			<ULink
				class="font-custom"
				to="/two"
				active-class="text-primary underline underline-offset-8"
				inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
				Link 2
			</ULink>
			<ULink
				class="font-custom"
				to="/three"
				active-class="text-primary underline underline-offset-8"
				inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
				Link 3
			</ULink>
		</template>

		<!-- <nav class="flex justify-between gap-4 p-6">
	
			<div class="flex gap-4 *:p-[20px]">
				<!-- <ULink
					class="font-custom"
					to="/two"
					active-class="text-primary underline underline-offset-8"
					inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
					Link 2
				</ULink>
				<ULink
					class="font-custom"
					to="/three"
					active-class="text-primary underline underline-offset-8"
					inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
					Link 3
				</ULink>
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

				<!-- Edit more later (แก้สีขอบนอก) 
				<UButton
					class="dark:focus:ring-4 dark:focus:ring-offset-4 dark:ring-lime-500"
					v-motion
					:initial="{ scale: 1 }"
					:tapped="{ scale: 1.15 }"
					:hovered="{ scale: 1.1 }">
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
		</nav>  -->
	</UHeader>
	<slot />
</template>
