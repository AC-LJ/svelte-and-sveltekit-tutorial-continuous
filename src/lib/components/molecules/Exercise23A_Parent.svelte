<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import Exercise23B_Child from "$components/molecules/Exercise23B_Child.svelte";

	// functions
	function handleMessage(event: CustomEvent) {
		alert(event.detail.text);
	}
</script>

<template lang="pug">
	ExerciseHeader(
		section="Events",
		startNumber=23,
		topic="Component events"
	)

	Exercise23B_Child(on:message!="{ handleMessage }")</template>
