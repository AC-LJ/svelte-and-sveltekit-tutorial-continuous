<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import EditorsNote from "$atoms/EditorsNote.svelte";

	// variables
	let msg = `
	Necessarily, the construction of this completed tutorial has, in previous exercises, 
	made more interesting use of props than is done in this exercise. Review this exercise only if 
	props are completely foreign to you. Otherwise, refer to previous exercises that contain buttons 
	to see how props are used with the "ButtonGeneric1" component. 
	`;
</script>

<template lang="pug">
	ExerciseHeader(
		section="Props",
		startNumber=10,
		topic="Declaring props"
	)

	EditorsNote(noteContent!="{ msg }")</template>
