<script lang="ts">
	// external libraries
	import { marked } from "marked";

	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import { get } from "svelte/store";

	// variables
	let value = `Some words are *italic*, some are ***bold***\n\n- lists\n- are\n- cool`;
</script>

<template lang="pug">
	ExerciseHeader(
		section="Bindings",
		startNumber=31,
		topic="Text inputs"
	)

	.text-field-container.grid.gap-6.mt-6(class="grid-cols-[5em_1fr]")
		p input
		textarea.flex.flex-grow(bind:value!="{ value }")

		p output
		div {  @html marked.parse(value)  }</template>

<style>
	:global(li) {
		position: relative;
		margin-left: 0.9em;
	}

	:global(li::before) {
		position: absolute;
		content: "•";
		font-size: 1.75em;
		line-height: 1rem;
		left: -1.15rem;
		top: 0.1rem;
	}
	.grid {
		display: grid;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
	}
	textarea {
		flex: 1;
		resize: none;
	}
</style>
