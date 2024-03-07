<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	let a = 0;
	let b = 0;
</script>

<template lang="pug">
	ExerciseHeader(
		section="Bindings",
		startNumber=27,
		topic="Numeric inputs"
	)

	.input-grid.grid.grid-cols-1.gap-4.mt-6
		label
			input.rounded-md.px-3.py-1.text-20.block.w-20(
				bind:value!="{ a }",
				type="number"
			)
			input.rounded-md.px-2.py-1.w-96.text-20(
				bind:value!="{ a }",
				max="100",
				min="0",
				step="1",
				type="range"
			)

		label
			input.rounded-md.px-3.py-1.text-20.block.w-20(
				bind:value!="{ b }",
				type="number"
			)
			input.rounded-md.px-2.py-1.w-96.text-20(
				bind:value!="{ b }",
				max="100",
				min="0",
				step="1",
				type="range"
			)

		p.text-24 { a } + { b } = { a + b }</template>
