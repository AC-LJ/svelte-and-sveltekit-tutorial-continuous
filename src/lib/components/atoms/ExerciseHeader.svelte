<script lang="ts">
	export let exerciseNumber: string;
	export let exerciseTopic: string;
</script>

<template lang="pug">
	header.-ml-4.p-4.bg-neutral-50.bg-opacity-90.w-fit.rounded-lg
		h2 Exercise { exerciseNumber }
			span.text-20.font-semibold.ml-4 { exerciseTopic }</template>
