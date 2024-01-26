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
	.headline.text-20.font-semibold.ml-4.mt-2
		p Spread props
	p.mt-6 The spread props syntax is unavailable in this stack. Enter props one at a time.

	Ex12PackageInfo(
		name!="{ pkg.name }",
		speed!="{ pkg.speed }",
		version!="{ pkg.version }",
		website!="{ pkg.website }"
	)</template>
