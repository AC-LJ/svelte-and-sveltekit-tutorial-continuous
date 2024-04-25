<!--
@component
The basic, reusable button that appears in many of the exercises.
* onClick: function  -- the function that does whatever the button is supposed to do when activated.
-->
<script lang="ts">
	// props
	export let onClick: () => void;
</script>

<template lang="pug">
	button(
		class=`
				active:bg-opacity-40
				bg-opacity-60
				bg-white
				border-2
				border-neutral-700
				border-opacity-30
				duration-200
				h-fit
				hover:bg-opacity-100
				hover:border-opacity-50
				hover:shadow-md
				py-2
				px-3
				rounded-lg
				transition
				w-full
				`,
		on:click!="{ onClick }"
	)
		slot</template>
