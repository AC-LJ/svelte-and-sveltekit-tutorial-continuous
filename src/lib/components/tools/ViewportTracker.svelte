<script lang="ts">
	// Svelte directives
	import { onMount, onDestroy } from "svelte";

	// stores
	import { viewportWidth } from "$stores/viewportStore";

	// functions
	function handleResize() {
		// console.log("viewPortMeter says: window.innerWidth is", $viewportWidth);
		if (typeof window !== "undefined") $viewportWidth = window.innerWidth;
	}

	onMount(() => {
		if (typeof window !== "undefined")
			window.addEventListener("resize", handleResize);
		$viewportWidth = window.innerWidth;
	});

	onDestroy(() => {
		if (typeof window !== "undefined")
			window.removeEventListener("resize", handleResize);
	});
</script>

<template lang="pug">
	.absolute.top-0.left-0.w-full.pointer-events-none.select-none.hidden &nbsp;</template>
