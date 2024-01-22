<script lang="ts">
	// variables
	let content =
		"This string is defined in a variable and passed to an <p> element in the template.";
</script>

<template lang="pug">
	h2 Exercise 1
		span.text-20.font-semibold.ml-4 Your first component (Dynamic content)
	p.py-6 { content }
	span</template>
