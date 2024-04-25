<!--
@component
An invisible, out-of-flow DOM element that listens to the viewport width and relays it to the viewport store.
-->

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
	.viewport-tracker(
		class=`
			absolute
			hidden
			left-0
			pointer-events-none
			select-none
			top-0
			w-full
		`
	) &nbsp;</template>
