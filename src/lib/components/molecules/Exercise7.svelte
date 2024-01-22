<script lang="ts">
	// components
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// variables
	let count = 0;
	$: doubled = count * 2;

	// functions
	const increment = () => (count += 1);
	const clear = () => (count = 0);
</script>

<template lang="pug">
	h2 Exercise 7
		span.text-20.font-semibold.ml-4 Reactivity / Declarations

	.button-box.grid.grid-cols-2.gap-4.mt-6.max-w-sm
		ButtonGeneric1(
			buttonContent!="Clicked { count } { count===1 ? 'time' : 'times'}",
			onClick!="{ increment }"
		)
		ButtonGeneric1(
			buttonContent="Clear the count",
			onClick!="{ clear }"
		)

	p.text-20.py-8 { count } doubled is { doubled }</template>
