<script lang="ts">
	// components
	import Ex4Nested from "$atoms/Ex4Nested.svelte";
</script>

<template lang="pug">
	h2 Exercise 4
		span.text-20.font-semibold.ml-4 Nested components
	p.py-6 This is a paragraph in the parent component with styles applied in the parent component.
	Ex4Nested</template>

<style>
	p {
		color: darkgoldenrod;
		font-family: "Comic Sans MS", cursive;
		font-size: 2em;
		max-width: 50ch;
	}
</style>
