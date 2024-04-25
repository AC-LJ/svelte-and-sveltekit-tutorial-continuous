<script lang="ts">
	export let backgroundColor = "bg-neutral-300";
</script>

<template lang="pug">
	.exercise-container(
		class=`
				bg-opacity-40
				border
				border-neutral-400
				flex
				flex-col
				min-h-24
				px-7
				py-6
				rounded-xl
				shadow-lg
				text-eerie
		`,
		class!="{ backgroundColor }"
	)
		slot</template>
