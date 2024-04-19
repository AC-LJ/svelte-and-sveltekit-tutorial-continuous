<script lang="ts">
	// props
	export let page = "";
	export let onClick: (input: string) => void;
	// export let onClick: () => void;

	// stores
	import { currentPage } from "$stores/paginationStore";
</script>

<template lang="pug">
	button.h-9.text-18.bg-opacity-20(
		class="w-[90px] md:w-fit lg:text-20",
		on:click!="{ onClick }",
		style!="{ $currentPage === page ? 'font-weight: 700; text-shadow: #93c5fd 1px 0 16px; transform: scale(1.15)' : 'font-weight: 200;' }"
	) { page }</template>
