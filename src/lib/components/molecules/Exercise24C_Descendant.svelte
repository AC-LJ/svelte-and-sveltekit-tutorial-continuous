<script lang="ts">
	// Svelte directives
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	// components
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// functions
	function passMessage() {
		dispatch("message", {
			text: `
This message was sent from a grandchild component to a child component, and forwarded from the child \
component to the parent component. 

There's probably a use case where this is a good way to do this, \
but it's significantly more complicated to implement, and less flexible, than a Svelte store, where you \
can assign variables that can be accessed by any component that imports the store. \
`,
		});
	}
</script>

<template lang="pug">
	.button-grid.grid.grid-cols-1.gap-4.mt-6(class="w-[256px]")
		ButtonGeneric1(onClick!="{ passMessage }")
			p Click here to pass a message to the grandparent component</template>
