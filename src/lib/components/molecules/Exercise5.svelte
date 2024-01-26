<script lang="ts">
	// variables
	let string = `This string contains some <strong>HTML!!!</strong>`;
</script>

<template lang="pug">
	h2 Exercise 5
	.headline.text-20.font-semibold.ml-4.mt-2
		p HTML tags
	p.text-20.py-8 {  @html string  }</template>
