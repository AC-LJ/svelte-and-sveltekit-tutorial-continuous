<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	// variables
	let src = "https://loremflickr.com/640/360";
	// let src = "src/lib/assets/kitten-problematic-size.jpg";
</script>

<template lang="pug">
	ExerciseHeader(
		section="Intro",
		startNumber=2,
		topic="Dynamic attributes"
	)

	p.py-4 This image's source is a URL string assigned to a variable and passed into the img element's src attribute.
	p Also, the Svelte shorthand syntax apparently works for the src attribute in this dev stack.
	.image-container.mt-6.w-fit.rounded-md.overflow-hidden.border-white
		img(
			alt="Randomly selected from loremflickr.",
			draggable="false",
			height="360",
			width="640",
			{src}
		)</template>
