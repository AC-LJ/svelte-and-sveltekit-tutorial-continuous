<script lang="ts">
	// components
	import BasicSvelteNav from "$components/organisms/BasicSvelteNav.svelte";
</script>

<template lang="pug">
	header(
		class=`
			bg-eerie
			max-w-[1800px]
			mx-auto
			px-8
			py-10
			text-center
			text-primary
		`
	)
		h1(class=`
				leading-10
				text-30
				sm:text-36 
				md:text-48
			`) The Svelte Tutorial Demonstrated
		h2(class=`
				mt-8
				text-20

				md:text-24
			`) Completed with Lightning Jar's "Skinnypug" stack

	BasicSvelteNav</template>
