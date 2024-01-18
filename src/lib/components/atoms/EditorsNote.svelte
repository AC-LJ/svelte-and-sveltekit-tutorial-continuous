<script lang="ts">
	// props
	export let noteContent = "I have nothing to declare!";
</script>

<template lang="pug">
	.note-card.mt-6.bg-white.bg-opacity-70.p-6.w-fit.max-w-lg.rounded-xl
		p.pb-4.text-16 Editor's note:
		p.text-20 { noteContent }</template>
