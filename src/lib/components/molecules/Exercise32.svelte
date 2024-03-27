<script lang="ts">
	// Svelte directives
	import { onMount } from "svelte";

	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	// utility functions
	import { paint } from "$utils/utils";

	// functions
	onMount(() => {
		const canvas = document.querySelector("canvas") as HTMLCanvasElement;
		const context = canvas.getContext("2d");

		if (context) {
			requestAnimationFrame(function loop(t) {
				requestAnimationFrame(loop);
				paint(context, t);
			});
		}
	});
</script>

<template lang="pug">
	ExerciseHeader(
		section="Lifecycle",
		startNumber=32,
		topic="onMount"
	)

	canvas(
		height!="{ 32 }",
		width!="{ 32 }"
	)</template>

<style>
	canvas {
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #666;
		mask: url(src/lib/assets/svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 65%;
		-webkit-mask: url(src/lib/assets/svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 65%;
	}
</style>
