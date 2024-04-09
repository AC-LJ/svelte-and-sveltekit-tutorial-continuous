<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// stores
	import { count } from "$stores/exercise39Store";
</script>

<template lang="pug">
	ExerciseHeader(
		section="Stores",
		startNumber=39,
		topic="Custom stores"
	)

	.grid.grid-cols-1.grid-rows-2.gap-4.h-full.mt-6
		h3.text-36 The count is { $count }
		.flex.gap-4.pb-4.items-end
			ButtonGeneric1(onClick!="{ count.increment }")
				p.text-20.font-bold +

			ButtonGeneric1(onClick!="{ count.decrement }")
				p.text-20.font-bold -

			ButtonGeneric1(onClick!="{ count.reset }")
				p.text-20 Reset</template>
