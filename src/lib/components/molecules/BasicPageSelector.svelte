<script lang="ts">
	import { page } from "$app/stores";

	// components
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// stores
	import { currentPage } from "$stores/paginationStore";

	// variables
	const sectionTitles: string[] = [
		"intro",
		"reactivity",
		"props",
		"logic",
		"events",
		"bindings",
		"lifecycle",
		"stores",
	];

	let selectedIndex = 0;
	$currentPage = sectionTitles[selectedIndex];

	// functions
	function previous() {
		selectedIndex = selectedIndex === 0 ? 0 : selectedIndex - 1;
		$currentPage = sectionTitles[selectedIndex];
	}

	function next() {
		selectedIndex =
			selectedIndex === sectionTitles.length - 1
				? sectionTitles.length - 1
				: selectedIndex + 1;
		$currentPage = sectionTitles[selectedIndex];
	}

	function mouseSelectPage(page: string) {
		selectedIndex = sectionTitles.indexOf(page);
		$currentPage = page;
	}
</script>

<template lang="pug">
	.page-select.flex.justify-around.px-8
		.w-32
			ButtonGeneric1(onClick!="{ previous }")
				p.text-20.text-black.font-bold Previous

		+each('sectionTitles as page')
			.w-24
				p.text-20(
					on:click!="{ () => mouseSelectPage(page) }",
					style!="{ $currentPage === page ? 'font-weight: 900' : 'font-weight: 200' }"
				) { page }
		.w-32
			ButtonGeneric1(onClick!="{ next }")
				p.text-20.text-black.font-bold Next</template>
