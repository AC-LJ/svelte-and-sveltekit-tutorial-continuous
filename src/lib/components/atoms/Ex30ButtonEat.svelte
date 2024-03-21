<script lang="ts">
	// props
	export let onClick: () => void;
	export let buttonImage = "";
	// export let buttonContent = "";
</script>

<template lang="pug">
	button.rounded-lg.w-44.border.border-eerie.py-1.px-4.flex.flex-col.items-center(
		class="hover:shadow-md hover:shadow-blue-400",
		on:click!="{ onClick }"
	)
		img.h-14(
			alt="A cartoon mouth",
			src!="{ buttonImage }"
		)

		slot</template>
