<script lang="ts">
	// components
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// variables
	let numbers: number[];
	$: sum = numbers.reduce((a, b) => a + b, 0);

	// functions
	const addNumber = () => (numbers = [...numbers, numbers.length + 1]);
	const reset = () => (numbers = [1, 2, 3, 4]);

	// functions called at setup
	reset();
</script>

<template lang="pug">
	h2 Exercise 9
		span.text-20.font-semibold.ml-4 Reactivity / Updating arrays
	p.text-24.py-6 { numbers.join(" + ") } = { sum }

	.button-box.grid.grid-cols-2.gap-4.max-w-sm
		ButtonGeneric1(
			buttonContent!="Add a number",
			onClick!="{ addNumber }"
		)
		ButtonGeneric1(
			buttonContent="Reset",
			onClick!="{ reset }"
		)
	span</template>
