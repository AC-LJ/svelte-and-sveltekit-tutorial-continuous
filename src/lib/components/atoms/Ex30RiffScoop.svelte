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

	// console.log("rotation:", typeof rotation, rotation);
</script>

<template lang="pug">
	img.object-contain.absolute(
		alt="A scoop of ice cream.",
		class=`h-[15%] w-fit z-20`,
		draggable="false",
		height="105",
		src!="{ flavours[flavourSelect] }",
		style!="{ `transform: translate(${xAdjustment}px,${yAdjustment}px) rotate(${rotation}deg)` }"
		width="120"
	)
</template>
