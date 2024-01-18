<script lang="ts">
	// variables
	let string = `This string contains some <strong>HTML!!!</strong>`;
</script>

<template lang="pug">
	h2 Exercise 5
		span.text-20.font-semibold.ml-4 HTML tags
	p.text-20.py-8 {  @html string  }</template>
