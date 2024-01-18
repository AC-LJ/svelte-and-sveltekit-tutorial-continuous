<script lang="ts">
</script>

<template lang="pug">
	h2 Exercise 3
		span.text-20.font-semibold.ml-4 Styling
	p The styles applied to these paragraphs are scoped to this component only.
	p It must be the case that TW classes are applied before traditionally declared styles because they cannot be used to override same.
	p(class="override") This paragraph is unaffected due to an "override" class selector included in the style element.</template>

<style>
	p {
		color: darkred;
		font-family: "Comic Sans MS", cursive;
		font-size: 2em;
		padding: 0.5em 0;
		max-width: 50ch;
	}

	.override {
		color: black;
		font-family: sans-serif;
		font-size: 1.1em;
	}
</style>
