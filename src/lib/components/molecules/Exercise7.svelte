<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// variables
	let count = 0;
	$: doubled = count * 2;

	// functions
	const increment = () => (count += 1);
	const clear = () => (count = 0);
</script>

<template lang="pug">
	ExerciseHeader(
		section="Reactivity",
		startNumber=7,
		topic="Declarations"
	)

	.button-box.grid.grid-cols-2.gap-4.grow.items-center.mt-4.max-w-sm
		ButtonGeneric1(onClick!="{ increment }")
			p Clicked { count } { count === 1 ? "time" : "times" }

		ButtonGeneric1(onClick!="{ clear }")
			p Clear the count

	p.text-20.py-4 { count } doubled is { doubled }</template>
