<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
</script>

<template lang="pug">
	ExerciseHeader(
		section="Intro",
		startNumber=3,
		topic="Styling"
	)

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
