<script lang="ts">
	// props
	export let topOffset: number;
</script>

<template lang="pug">
	.absolute(
		class="h-[100%]",
		style!="top: {topOffset}px"
	)
		img.object-contain.w-16(
			class="h-[36%]",
			alt="An empty ice cream cone.",
			height="870",
			src!="src/lib/assets/ice-cream-cone.png",
			width="400"
		)
</template>
