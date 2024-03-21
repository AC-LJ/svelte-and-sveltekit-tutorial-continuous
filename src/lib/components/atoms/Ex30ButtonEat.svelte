<script lang="ts">
	// props
	export let onClick: () => void;
	export let buttonImage = "";
	// export let buttonContent = "";
</script>

<template lang="pug">
	button.rounded-lg.w-36(on:click!="{ onClick }")
		img.h-14.m-auto.mb-1(
			alt="A cartoon mouth",
			src!="{ buttonImage }"
		)

		slot</template>
