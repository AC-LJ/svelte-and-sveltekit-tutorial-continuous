<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	let name: string = "";
</script>

<template lang="pug">
	ExerciseHeader(
		section="Bindings",
		startNumber=26,
		topic="Text inputs"
	)

	.input-grid.grid.grid-cols-1.gap-4.mt-6
		input.rounded-md.px-2.py-1.text-20(
			bind:value!="{ name }",
			placeholder="Type a name to greet"
		)
		p.text-24 Hello { name ? name : "World" }!</template>
