<script lang="ts">
	// components
	import Ex23Child from "$atoms/Ex23Child.svelte";

	// functions
	function handleMessage(event: CustomEvent) {
		alert(event.detail.text);
	}
</script>

<template lang="pug">
	h2 Exercise 23
		.headline.text-20.font-semibold.ml-4.mt-2
			p Component events
		Ex23Child(on:message!="{ handleMessage }")</template>
