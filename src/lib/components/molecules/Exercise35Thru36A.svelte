<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import Incrementer from "$components/molecules/Exercise35Thru36BIncrementer.svelte";
	import Decrementer from "$components/molecules/Exercise35Thru36CDecrementer.svelte";
	import Reset from "$components/molecules/Exercise35Thru36DReset.svelte";

	// stores
	import { count } from "$stores/Exercise35Store";
</script>

<template lang="pug">
	ExerciseHeader(
		endNumber=36,
		section="Stores",
		startNumber=35,
		topic="Writable stores"
	)

	.grid.grid-cols-1.grid-rows-2.gap-4.h-full.mt-6
		h3.text-36 The count is { $count }
		.flex.gap-4.pb-4.items-end
			Incrementer
			Decrementer
			Reset</template>
