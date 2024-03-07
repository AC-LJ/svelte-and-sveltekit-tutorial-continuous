<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import Exercise24B_MidChild from "$molecules/Exercise24B_MidChild.svelte";

	// functions
	function handleMessage(event: CustomEvent) {
		alert(event.detail.text);
	}
</script>

<template lang="pug">
	ExerciseHeader(
		section="Events",
		startNumber=24,
		topic="Event forwarding"
	)

	Exercise24B_MidChild(on:message!="{ handleMessage }")</template>
