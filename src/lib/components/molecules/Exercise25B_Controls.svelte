<script lang="ts">
	// Svelte directives
	// import { createEventDispatcher } from "svelte";
	// const dispatch = createEventDispatcher();
</script>

<template lang="pug">
	.button-grid.grid.grid-cols-2.gap-4.mt-6.h-60
		//- ButtonCustomizable1(buttonContent="Play/Pause")
		//- ButtonCustomizable1(buttonContent="Rewind")
		button.h-48.w-48.shadow-xl.rounded-full.text-stone-200.text-28(
			class="hover:border-4 hover:border-parchment hover:border-opacity-70 active:brightness-80 active:h-24 active:translate-y-12 transition-all duration-100 ease-in-out",
			on:click
		) honk me</template>

<style lang="css">
	button {
		background: radial-gradient(circle at 62% 34%, #ff8800, #ff0000 45%);
		text-transform: uppercase;
		text-shadow:
			-1px -1px 2px rgba(0, 0, 0, 0.3),
			1px 1px 2px rgba(255, 255, 255, 0.4);
		box-shadow:
			0 8px 0 hsl(0, 100%, 30%),
			2px 12px 10px rgba(0, 0, 0, 0.35);
	}
</style>
