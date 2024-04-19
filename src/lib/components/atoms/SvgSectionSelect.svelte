<script lang="ts">
	// props
	export let direction: string;
</script>

<template lang="pug">
	svg(
		fill="none",
		height="30",
		viewBox="0 0 30 30",
		width="30",
		xmlns="http://www.w3.org/2000/svg"
	)
		+if('["left", "l"].includes(direction)')
			path(
				d="M20 25L10 15L20 5",
				stroke="#93c5fd",
				stroke-linecap="round",
				stroke-linejoin="round",
				stroke-width="3"
			)
			+else
			path(
				d="M10 5L20 15L10 25",
				stroke="#93c5fd",
				stroke-linecap="round",
				stroke-linejoin="round",
				stroke-width="3"
			)</template>
