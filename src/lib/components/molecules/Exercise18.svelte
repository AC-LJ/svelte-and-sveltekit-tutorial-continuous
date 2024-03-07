<script lang="ts">
	// Svelte directives
	import { error } from "@sveltejs/kit";

	// utils
	import { getWord } from "$utils/utils";

	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";
	import Graf from "$atoms/Ex18PayloadGraf.svelte";

	// variables
	let promise = getWord();

	// functions
	function handleClick() {
		promise = getWord();
	}
</script>

<template lang="pug">
	ExerciseHeader(
		section="Logic",
		startNumber=18,
		topic="Await blocks"
	)

	.button-grid.grid.grid-cols-1.gap-4.mt-6.max-w-md
		ButtonGeneric1(onClick!="{ handleClick }")
			p Get a new word
		+await('promise')
			Graf(textContent="waiting...")
			+then('promise')
				Graf(textContent!="{ promise }")
			+catch('error')
				Graf(textContent!="{ error.message }")</template>
