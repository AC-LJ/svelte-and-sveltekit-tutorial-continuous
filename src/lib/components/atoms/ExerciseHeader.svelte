<!--
@component
The header inside each exercise, displaying the exercise number, section, and topic.
The code is sufficiently self-explanatory that any further documentation would amount to clutter.
-->
<script lang="ts">
	export let startNumber: number;
	export let endNumber = startNumber;
	export let section: string;
	export let topic: string;

	function makeExerciseNumberString(start: number, end: number) {
		return `${startNumber === endNumber ? "Exercise" : "Exercises"} ${
			start === end ? start : start.toString() + " thru " + end.toString()
		}`;
	}
</script>

<template lang="pug">
	h3.exercise-number { makeExerciseNumberString(startNumber, endNumber) }
	h4.section-and-topic-announcement(
		class=`
			font-semibold
			ml-4
			mt-1
			py-1
			text-20
		`
	) { section } / { topic }</template>
