<script lang="ts">
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	// components
	ExerciseHeader;
	// variables
	let m = { x: 0, y: 0 };

	// functions
	function handleMove(event: MouseEvent) {
		if (event.currentTarget instanceof HTMLElement) {
			m.x =
				event.clientX -
				Math.round(event.currentTarget.getBoundingClientRect().left);
			m.y =
				event.clientY -
				Math.round(event.currentTarget.getBoundingClientRect().top);
		}
	}
</script>

<template lang="pug">
	ExerciseHeader(
		endNumber=21,
		section="Events",
		startNumber=19,
		topic="DOM Events, Inline handlers"
	)

	.mouse-tracking-field.grid.grid-cols-1.grid-rows-2.bg-eerie.bg-opacity-80.text-parchment.aspect-square.h-60.rounded-lg.mt-6(
		on:mouseleave!="{ () => (m = { x: 0, y: 0 }) }",
		on:mousemove!="{ handleMove }",
		role="presentation"
	)
		.flex.p-1.justify-center.items-end
			p Tracking mouse in field
		.flex.p-1.justify-center.items-start
			+if('m.x')
				p x: { m.x } y: { m.y }
				+else
					p.text-14 Place cursor in field</template>
