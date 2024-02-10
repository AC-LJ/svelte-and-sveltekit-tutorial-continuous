<script lang="ts">
	export let backgroundColor = "bg-neutral-300";
</script>

<template lang="pug">
	.exercise-container.text-eerie.bg-opacity-40.border.border-neutral-400.rounded-xl.shadow-lg(
		class!="{ backgroundColor } min-h-24 py-8 px-12"
	)
		slot</template>
