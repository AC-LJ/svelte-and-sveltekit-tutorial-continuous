<script lang="ts">
	// components
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// variables
	let count = 0;
	$: {
		console.log(`The count is ${count}`);
		console.log(
			"By grouping this static message with a statement involving a reactive variable, we display it according to the same trigger.",
		);
	}

	// functions
	const increment = () => (count += 1);
	const clear = () => (count = 0);
</script>

<template lang="pug">
	h2 Exercise 8
		span.text-20.font-semibold.ml-4 Statements

	p.text-20.py-8 Open your browser console to see what this exercise is about.

	.button-box.grid.grid-cols-2.gap-4.max-w-sm
		ButtonGeneric1(
			buttonContent!="Clicked { count } { count===1 ? 'time' : 'times'}",
			onClick!="{ increment }"
		)
		ButtonGeneric1(
			buttonContent="Clear the count",
			onClick!="{ clear }"
		)</template>
