<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	// variables
	let content =
		"This string is defined in a variable and passed to a <p> element in the template.";
</script>

<template lang="pug">
	ExerciseHeader(
		section="Intro",
		startNumber=1,
		topic="Your first component (Dynamic content)"
	)
	.grid.grid-cols-1.my-6.content-middle.grow
		p.text-24.justify-self-center.self-center.px-8 { content }</template>
