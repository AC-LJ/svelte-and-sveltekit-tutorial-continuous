<script lang="ts">
	// props
	export let page = "";
	export let onClick: (input: string) => void;
	// export let onClick: () => void;

	// stores
	import { currentPage } from "$stores/paginationStore";
</script>

<template lang="pug">
	button.nav-button.text-18(
		class="w-[90px] md:w-fit lg:text-20 bg-transparent rounded-lg transition-colors duration-200 ease-in-out",
		aria-current!="{ $currentPage === page }",
		on:click!="{ onClick }"
	) { page }</template>

<style>
	button {
		height: 36px;
		color: #93c5fd;
	}

	button[aria-current="true"] {
		font-weight: 700;
		text-shadow: #93c5fd 1px 0 16px;
		transform: scale(1.15);
	}

	button[aria-current="false"]:hover {
		background: radial-gradient(
			ellipse at 50% 50%,
			rgba(200, 220, 255, 0.4),
			transparent 60%
		);
	}
</style>
