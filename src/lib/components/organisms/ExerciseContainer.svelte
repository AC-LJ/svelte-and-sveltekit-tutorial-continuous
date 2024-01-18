<script lang="ts">
	export let backgroundColor = "bg-neutral-300";
</script>

<template lang="pug">
	section(class!="{ backgroundColor } min-h-24 py-8 px-12")
		slot

	span</template>
