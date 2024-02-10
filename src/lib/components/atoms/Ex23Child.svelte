<script lang="ts">
	// Svelte directives
	import { createEventDispatcher } from "svelte";
	const dispatchEvent = createEventDispatcher();

	// components
	import ButtonGeneric1 from "./ButtonGeneric1.svelte";

	// functions
	function passMessage() {
		dispatchEvent("message", {
			text: "It's nice that this functionality is available, but there's almost always an easier way to do what event dispatchers do.",
		});
	}
</script>

<template lang="pug">
	.button-grid.grid.grid-cols-1.gap-4.mt-6(class="w-[250px]")
		ButtonGeneric1(onClick!="{ passMessage }")
			p Click here to pass a message to the parent component</template>
