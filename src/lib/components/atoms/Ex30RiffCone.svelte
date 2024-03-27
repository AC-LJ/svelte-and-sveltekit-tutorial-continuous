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
			alt="An empty ice cream cone.",
			class="h-[36%] scale-x-[-1] -rotate-[3deg]",
			draggable="false",
			height="870",
			src!="src/lib/assets/ice-cream-cone.png",
			width="400"
		)
</template>
