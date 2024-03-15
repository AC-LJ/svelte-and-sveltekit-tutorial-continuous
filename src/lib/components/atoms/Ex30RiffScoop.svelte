<script lang="ts">
	// props
	export let flavourSelect: number;
	export let yAdjustment: number;
	export let xAdjustment = 0;
	export let rotation = 0;

	// variables
	const flavours = [
		"src/lib/assets/cookies-and-cream-scoop.png",
		"src/lib/assets/mint-choc-chip-scoop.png",
		"src/lib/assets/raspberry-ripple-scoop.png",
	];

	console.log("rotation:", typeof rotation, rotation);
</script>

<template lang="pug">
	img.object-cover.absolute(
		class=`h-[14.5%] z-20`,
		alt="A scoop of ice cream.",
		height="100",
		src!="{ flavours[flavourSelect] }",
		style!="{ `transform: translate(${xAdjustment}px,${yAdjustment}px) rotate(${rotation}deg)` }"
	)
</template>
