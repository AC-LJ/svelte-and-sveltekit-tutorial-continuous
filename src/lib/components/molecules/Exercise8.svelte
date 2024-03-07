<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
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
	ExerciseHeader(
		section="Reactivity",
		startNumber=8,
		topics="Statements"
	)

	p.text-20.py-6 Open your browser console to see what this exercise is about.

	.button-box.grid.grid-cols-2.gap-4.py-2.max-w-sm
		ButtonGeneric1(onClick!="{ increment }")
			p Clicked { count } { count === 1 ? "time" : "times" }

		ButtonGeneric1(onClick!="{ clear }")
			p Clear the count</template>
