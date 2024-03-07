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
		if (flavours.length <= scoops) {
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
		startNumber=29,
		topic="Group inputs"
	)

	.scoop-count-grid.grid.grid-cols-1.gap-4.mt-6
		h2.text-20.font-semibold Size
		+each('[1, 2, 3] as number')
			label
				input.mr-3(
					bind:group!="{ scoops }",
					name="scoops",
					on:change!="{ updateKioskOutput }",
					type="radio",
					value!="{ number }"
				)
				| { number } { number === 1 ? "scoop" : "scoops" }
	.flavour-options-grid.grid.grid-cols-1.gap-4.mt-6
		h2.text-20.font-semibold Flavours
		+each('["cookies and cream", "mint choc chip", "raspberry ripple"] as flavour')
			label
				input.mr-3(
					bind:group!="{ flavours }",
					name="flavours",
					on:change!="{ updateKioskOutput }",
					type="checkbox",
					value!="{ flavour }"
				)
				| { flavour }
	p.mt-8.text-20 { kioskOutput }</template>
