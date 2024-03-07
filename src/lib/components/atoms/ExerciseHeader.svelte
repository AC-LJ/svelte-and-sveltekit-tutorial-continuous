<script lang="ts">
	export let startNumber: number;
	export let endNumber = startNumber;
	export let section: string;
	export let topic: string;

	function makeExerciseNumberString(start: number, end: number) {
		return `Exercise ${
			start === end ? start : start.toString() + " thru " + end.toString()
		}`;
	}
</script>

<template lang="pug">
	h2 { makeExerciseNumberString(startNumber, endNumber) }
	.headline.text-20.font-semibold.ml-4.mt-1
		p.py-1 { section } / { topic }</template>
