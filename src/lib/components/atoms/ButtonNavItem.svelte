<script lang="ts">
	// props
	export let page = "";
	export let onClick: (input: string) => void;
	// export let onClick: () => void;

	// stores
	import { currentPage } from "$stores/paginationStore";

	console.log("ButtonNavItem says: currentPage is", $currentPage);
	console.log("ButtonNavItem says: page variable value is", page);
</script>

<template lang="pug">
	button.h-9.w-24.text-18.border.border-primary(
		on:click!="{ onClick }",
		style!="{ $currentPage === page ? 'font-weight: 700; text-shadow: #93c5fd 1px 0 16px; font-size: 20px;' : 'font-weight: 200;' }"
	) { page }</template>
