<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// variables
	let count = 0;

	// functions
	const increment = () => (count += 1);
	const clear = () => (count = 0);
</script>

<template lang="pug">
	ExerciseHeader(
		section="Reactivity",
		startNumber=6,
		topic="Assignments"
	)

	.button-box.grid.grid-cols-2.gap-4.grow.mt-4.items-center.mb-12.max-w-sm
		ButtonGeneric1(onClick!="{ increment }")
			p Clicked { count } { count === 1 ? "time" : "times" }

		ButtonGeneric1(onClick!="{ clear }")
			p Clear the count</template>
