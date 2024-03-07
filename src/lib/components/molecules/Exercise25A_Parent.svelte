<script lang="ts">
	// svelte directives
	import { onMount } from "svelte";

	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import Exercise25B_Controls from "$components/molecules/Exercise25B_Controls.svelte";

	// stores
	import { hornMp3 } from "$lib/stores/mp3Store";

	// resolving TypeScript hassles with the audio API

	// variables

	let audio: HTMLAudioElement;

	onMount(() => {
		audio = new Audio();
		audio.src = `data:audio/mpeg;base64,${$hornMp3}`;
	});

	// const audio = new Audio();
	// audio.src = `data:audio/mpeg;base64,//${hornMp3}`;
	// console.log("first 100 characters of 'audio.src'", audio.src.slice(100));

	// functions
	function honkHandler() {
		if (audio !== undefined) {
			audio.load();
			audio.play();
		}
	}
</script>

<template lang="pug">
	ExerciseHeader(
		section="Events",
		startNumber=25,
		topic="DOM event forwarding"
	)

	Exercise25B_Controls(on:click!="{ honkHandler }")</template>
