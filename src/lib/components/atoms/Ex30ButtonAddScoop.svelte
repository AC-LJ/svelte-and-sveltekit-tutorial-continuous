<script lang="ts">
	// props
	export let choice = 0;
	export let onClick: () => void;

	const choices = [
		{ content: "Cookies & Cream" },
		{ content: "Mint Choc Chip" },
		{ content: "Raspberry Ripple" },
	];
</script>

<template lang="pug">
	button(
		class=`
				active:bg-opacity-40
				bg-opacity-60
				bg-viridian
				border-2
				border-neutral-700
				border-opacity-30
				font-bold
				max-w-[120px]
				py-2
				px-3
				rounded-lg
				text-14
				text-white
				uppercase
				w-full

				hover:bg-opacity-100

				md:max-w-[160px]
				md:px-3
				md:py-3

				transition
				duration-200
				`,
		id!="{ `ice-cream-button-${choice}` }",
		on:click!="{ onClick }"
	) { choices[choice].content }</template>

<style lang="css">
	button {
		background: radial-gradient(circle at 62% 34%, #5fa26d, #3f826d 45%);
		text-transform: uppercase;
		text-shadow:
			-1px -1px 2px rgba(0, 0, 0, 0.7),
			1px 1px 2px rgba(255, 255, 255, 0.7);
		box-shadow:
			0 3px 0 #1f624d,
			-3px 8px 8px rgba(0, 0, 0, 0.45);
	}
</style>
