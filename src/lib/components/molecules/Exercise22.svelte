<script lang="ts">
	// variables
	let unclicked = true;
	$: buttonText = unclicked ? "Click me!" : "Fun's over";

	// functions
	function handleClick() {
		alert("Clicked. This alert will only appear upon the first click.");
		unclicked = !unclicked;
	}
</script>

<template lang="pug">
	h2 Exercise 22
	.headline.text-20.font-semibold.ml-4.mt-2
		p Event modifiers

	.button-box.grid.grid-cols-1.gap-4.mt-8.max-w-xs
		button.py-2.px-3.border.border-neutral-700.rounded-lg(
			class=`
				active:bg-opacity-40
				bg-opacity-60
				bg-white
				border-2
				border-neutral-700
				border-opacity-30
				duration-200
				hover:bg-opacity-100
				hover:border-opacity-50
				hover:shadow-md
				py-2
				px-3
				rounded-lg
				transition
				`,
			on:click|once!="{ handleClick }"
		) { buttonText }</template>
