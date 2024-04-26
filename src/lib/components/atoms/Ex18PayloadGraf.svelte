<!--
@component
Called by Exercise18.svelte to display the resolution of the exercise's promise.
* prop textContent: string -- the text to display
-->
<script lang="ts">
	// props
	export let textContent = "Real error, not a simulation.";
</script>

<template lang="pug">
	.output-display-container(
		class=`
			bg-eerie
			bg-opacity-80
			border
			border-neutral-400
			m-auto
			mt-5
			py-4
			rounded-lg
			w-[86%]
			`
	)
		p.output-text(
			class=`
				font-medium
				text-28
				text-center
				text-parchment
				`
		) { textContent }</template>
