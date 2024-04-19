<script lang="ts">
	// components
	import BasicSvelteNav from "$components/organisms/BasicSvelteNav.svelte";
</script>

<template lang="pug">
	header.bg-eerie.text-primary.text-center.px-8.py-10.mx-auto(class="max-w-[1800px]")
		h1.text-30.leading-10(class="sm:text-36 md:text-48") The Svelte Tutorial Demonstrated
		p.mt-8.text-20(class="md:text-24") Completed with Lightning Jar's "Skinnypug" stack
	BasicSvelteNav</template>
