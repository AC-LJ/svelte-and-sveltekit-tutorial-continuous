<script lang="ts">
	// components

	import Thing from "$atoms/Ex17Thing.svelte";
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// types

	type ThingsObject = {
		id: number;
		name: string;
	};

	// variables

	let things = [
		{ id: 1, name: "apple" },
		{ id: 2, name: "banana" },
		{ id: 3, name: "carrot" },
		{ id: 4, name: "doughnut" },
		{ id: 5, name: "egg" },
	];

	let removedItems: ThingsObject[] = [];

	// functions
	function handleClick() {
		if (things.length > 0) {
			removedItems.unshift(things[0]);
			things = things.slice(1);
		}
	}

	function reset() {
		if (removedItems.length > 0) {
			for (let item of removedItems) {
				things = [item, ...things];
			}
			removedItems = [];
		}
	}
</script>

<template lang="pug">
	h2 Exercise 17
	.headline.text-20.font-semibold.ml-4.mt-2
		p Logic / Keyed each blocks

	.button-grid.grid.grid-cols-2.gap-4.mt-6.max-w-md
		ButtonGeneric1(onClick!="{ handleClick }")
			p Remove the first thing

		ButtonGeneric1(onClick!="{ reset }")
			p Reset
	.grid.grid-cols-2.gap-4.max-w-md
		.explainer.mt-4.text-center.text-14
			p.font-bold Without key
			p.font-semibold (unintended behavior)
			.things-container.mt-3.h-60.w-52.p-6.bg-eerie.bg-opacity-75.border-2.border-parchment.border-opacity-70.rounded-lg.text-24.shadow-neutral-700.shadow-lg.text-parchment
				+each('things as thing')
					Thing(name!="{ thing.name }")

		.explainer.mt-4.text-center.text-14
			p.font-bold With key
			p.font-semibold (works as intended)
			.things-container.mt-3.h-60.w-52.p-6.bg-eerie.bg-opacity-75.border-2.border-parchment.border-opacity-70.rounded-lg.text-24.shadow-neutral-700.shadow-lg.text-parchment
				+each('things as thing (thing.id)')
					Thing(name!="{ thing.name }")</template>
