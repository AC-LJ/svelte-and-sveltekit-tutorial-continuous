<script lang="ts">
	// props
	export let onClick: () => void;
	export let buttonContent = "";
</script>

<template lang="pug">
	button.py-2.px-3.border.border-neutral-700.rounded-lg(
		class=`
				active:bg-opacity-40
				bg-opacity-60
				bg-white
				border-2
				border-neutral-700
				border-opacity-30
				duration-200
				hover:bg-opacity-100
				hover:border-opacity-50
				hover:shadow-md
				py-2
				px-3
				rounded-lg
				transition
				`,
		on:click!="{ onClick }"
	) { buttonContent }</template>
