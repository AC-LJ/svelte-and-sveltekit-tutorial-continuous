<script lang="ts">
	// props
	export let flavourSelect: number;
	export let yAdjustment: number;
	export let xAdjustment = 0;
	export let rotation = 0;

	// variables
	const flavours = [
		"src/lib/assets/cookies-and-cream-scoop-regularized.png",
		"src/lib/assets/mint-choc-chip-scoop-regularized.png",
		"src/lib/assets/raspberry-ripple-scoop-regularized.png",
	];

	console.log("rotation:", typeof rotation, rotation);
</script>

<template lang="pug">
	img.object-contain.absolute(
		class=`h-[15%] z-20`,
		alt="A scoop of ice cream.",
		height="105",
		width="120"
		src!="{ flavours[flavourSelect] }",
		style!="{ `transform: translate(${xAdjustment}px,${yAdjustment}px) rotate(${rotation}deg)` }"
	)
</template>
