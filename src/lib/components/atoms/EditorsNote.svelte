<!--
@component
A card that accepts a message to display.
* prop noteContent: string  -- The message to display in the card.
-->
<script lang="ts">
	// props
	export let noteContent = "I have nothing to declare!";
</script>

<template lang="pug">
	.note-card(
		class=`
			bg-white
			bg-opacity-70
			max-w-lg
			mt-6
			p-6
			rounded-xl
			w-fit
		`
	)
		h4(class=`
				pb-4
				text-16
				`) Editor's note:

		p(class="text-20") { noteContent }</template>
