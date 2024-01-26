<script lang="ts">
	// variables
	let src = "https://loremflickr.com/640/360";
</script>

<template lang="pug">
	h2 Exercise 2
	.headline.text-20.font-semibold.ml-4.mt-2
		p Dynamic attributes
	p.py-4 This image's source is a URL string assigned to a variable and passed into the img element's src attribute.
	p Also, the Svelte shorthand syntax apparently works for the src attribute in this dev stack.

	.image-container.mt-6.w-fit.rounded-md.overflow-hidden.border-white
		img(
			alt="Randomly selected from loremflickr.",
			height="360",
			width="640",
			{src}
		)</template>
