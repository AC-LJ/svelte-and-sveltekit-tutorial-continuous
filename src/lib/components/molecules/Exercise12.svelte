<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import Ex12PackageInfo from "$atoms/Ex12PackageInfo.svelte";

	// variables
	const pkg = {
		name: "svelte",
		speed: "blazing",
		version: 4,
		website: "https://svelte.dev",
	};
</script>

<template lang="pug">
	ExerciseHeader(
		section="Props",
		startNumber=12,
		topic="Spread props"
	)

	p.mt-6 The spread props syntax is unavailable in this stack. Enter props one at a time.

	Ex12PackageInfo(
		name!="{ pkg.name }",
		speed!="{ pkg.speed }",
		version!="{ pkg.version }",
		website!="{ pkg.website }"
	)</template>
