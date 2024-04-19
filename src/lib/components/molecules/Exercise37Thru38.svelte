<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	// stores
	import { time } from "$stores/exercise37Thru38Store";
	import { elapsed } from "$stores/exercise37Thru38Store";

	const formatter = new Intl.DateTimeFormat("en", {
		hour12: true,
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
	});
</script>

<template lang="pug">
	ExerciseHeader(
		endNumber=38,
		section="Stores",
		startNumber=37,
		topic="Readable stores, Derived stores"
	)
	.mt-6.flex.flex-col.items-center.justify-center.bg-parchment.bg-opacity-60.rounded-lg.p-3
		h3.text-30 The time is { formatter.format($time) }
		p.text-20.text-center.mt-2 This page has been open for { $elapsed } { $elapsed === 1 ? "second" : "seconds" }</template>
