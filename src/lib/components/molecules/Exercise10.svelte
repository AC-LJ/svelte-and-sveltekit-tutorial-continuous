<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import EditorsNote from "$atoms/EditorsNote.svelte";

	// variables
	let msg = `
	Completing this illustrated tutorial has already, in previous exercises, involved more interesting use of props 
	than is made herein. Review "Exercise10.svelte" only if props are completely foreign to you. Otherwise, refer to 
	previous exercises that contain buttons to see how props are used with the "ButtonGeneric1" component. 
	`;
</script>

<template lang="pug">
	ExerciseHeader(
		section="Props",
		startNumber=10,
		topic="Declaring props"
	)

	EditorsNote(noteContent!="{ msg }")</template>
