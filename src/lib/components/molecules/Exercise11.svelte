<script lang="ts">
	// components
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
	h2 Exercise 11
		span.text-20.font-semibold.ml-4 Default values
	EditorsNote</template>
