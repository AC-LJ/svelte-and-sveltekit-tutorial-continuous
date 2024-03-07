<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// variables
	let numbers: number[];
	$: sum = numbers.reduce((a, b) => a + b, 0);

	// functions
	const addNumber = () => (numbers = [...numbers, numbers.length + 1]);
	const reset = () => (numbers = [1, 2, 3, 4]);

	// function calls at setup
	reset();
</script>

<template lang="pug">
	ExerciseHeader(
		section="Reactivity",
		startNumber=9,
		topic="Updating arrays"
	)

	p.text-24.py-6 { numbers.join(" + ") } = { sum }

	.button-box.grid.grid-cols-2.gap-4.mt-4.mb-4.max-w-sm
		ButtonGeneric1(onClick!="{ addNumber }")
			p Add a number

		ButtonGeneric1(onClick!="{ reset }")
			p Reset</template>
