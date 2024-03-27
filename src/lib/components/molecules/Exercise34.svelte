<script lang="ts">
	// Svelte directives
	import { tick } from "svelte";

	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	// variables
	let text = `Select some text and hit the tab key to toggle uppercase.  Review the code.  It uses Svelte's "tick" directive to prevent the highlight from being lost and the cursor from jumping to the end of the text when the toggle operation is performed.`;

	// functions
	async function handleKeydown(
		this: HTMLTextAreaElement,
		event: KeyboardEvent,
	) {
		if (event.key !== "Tab") return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		text =
			value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

		// without the "await tick();" this has no effect, because the DOM hasn't updated yet
		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>

<template lang="pug">
	ExerciseHeader(
		section="Lifecycle",
		startNumber=34,
		topic="beforeUpdate and afterUpdate"
	)

	textarea.mt-6.p-4.w-full.h-40.rounded-lg.resize-none(
		on:keydown!="{ handleKeydown }",
		value!="{ text }"
	)</template>
