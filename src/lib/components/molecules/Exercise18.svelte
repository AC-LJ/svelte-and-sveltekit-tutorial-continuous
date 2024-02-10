<script lang="ts">
	// Svelte directives
	import { error } from "@sveltejs/kit";

	// utils
	import { getWord } from "$utils/utils";

	// components
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
	h2 Exercise 18
	.headline.text-20.font-semibold.ml-4.mt-2
		p Logic / Await blocks

	.button-grid.grid.grid-cols-1.gap-4.mt-6.max-w-md
		ButtonGeneric1(onClick!="{ handleClick }")
			p Get a new word
		+await('promise')
			Graf(textContent="waiting...")
			+then('promise')
				Graf(textContent!="{ promise }")
			+catch('error')
				Graf(textContent!="{ error.message }")</template>
