<script lang="ts">
	export let backgroundColor = "bg-neutral-300";
</script>

<template lang="pug">
	.exercise-container.text-eerie.bg-opacity-40.border.border-neutral-400.rounded-xl.shadow-lg.flex.flex-col.min-h-24.py-6.px-7(
		class!="{ backgroundColor }"
	)
		slot</template>
