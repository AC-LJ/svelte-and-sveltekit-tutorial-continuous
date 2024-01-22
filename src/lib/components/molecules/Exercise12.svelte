<script lang="ts">
	// components
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
	h2 Exercise 12
		span.text-20.font-semibold.ml-4 Spread props: There is no syntax to enable the use of spread props in this stack.
	Ex12PackageInfo(
		name!="{ pkg.name }",
		speed!="{ pkg.speed }",
		version!="{ pkg.version }",
		website!="{ pkg.website }"
	)</template>
