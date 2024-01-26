<script lang="ts">
	// components
	import Ex4Nested from "$atoms/Ex4Nested.svelte";
</script>

<template lang="pug">
	h2 Exercise 4
	.headline.text-20.font-semibold.ml-4.mt-2
		p.override Nested components
	p.py-6 This is a paragraph in the parent component with styles applied in the parent component.
	Ex4Nested</template>

<style>
	p {
		color: rgba(144, 95, 0, 1);
		font-family: "Comic Sans MS", cursive;
		font-size: 2em;
		max-width: 50ch;
	}
	.override {
		color: black;
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
			Roboto,
			"Helvetica Neue",
			Arial,
			"Noto Sans",
			sans-serif,
			"Apple Color Emoji",
			"Segoe UI Emoji",
			"Segoe UI Symbol",
			"Noto Color Emoji";
		font-size: 20px;
		font-weight: 600;
	}
</style>
