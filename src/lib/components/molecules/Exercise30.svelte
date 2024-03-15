<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	// variables
	let scoops = 1;
	let flavours: string[] = [];
	let kioskOutput = "Please select at least one flavour.";

	const formatter = new Intl.ListFormat("en", {
		style: "long",
		type: "conjunction",
	});

	// functions
	function updateKioskOutput() {
		if (flavours.length <= scoops && flavours.length > 0) {
			kioskOutput = `You have ordered ${scoops} ${
				scoops === 1 ? "scoop" : "scoops"
			} of ${formatter.format(flavours)}.`;
		} else {
			if (flavours.length > scoops) {
				kioskOutput = "You cannot order more flavours than scoops.";
			} else {
				kioskOutput = "Please select at least one flavour.";
			}
		}
	}
</script>

<template lang="pug">
	ExerciseHeader(
		section="Bindings",
		startNumber=30,
		topic="Select Multiple"
	)

	.flex.flex-col.gap-6.mt-6
		.scoop-count-grid.grid.grid-cols-1.gap-4
			h2.text-20.font-semibold Size
			+each('[1, 2, 3] as number')
				label.flex.gap-3
					input(
						bind:group!="{ scoops }",
						name="scoops",
						on:change!="{ updateKioskOutput }",
						type="radio",
						value!="{ number }"
					)
					| { number } { number === 1 ? "scoop" : "scoops" }

		.flavours-grid.grid.grid-cols-1.gap-4
			h2.text-20.font-semibold Flavours (you may select one or more)
			select.p-3.rounded-lg.bg-white.bg-opacity-75(
				bind:value!="{ flavours }",
				multiple,
				on:change!="{ updateKioskOutput }"
			)
				+each('["cookies and cream", "mint choc chip", "raspberry ripple"] as flavour')
					option { flavour }

	p.mt-8.text-20 { kioskOutput }</template>
