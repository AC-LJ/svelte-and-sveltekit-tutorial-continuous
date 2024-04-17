<script lang="ts">
	import { page } from "$app/stores";
	import { fly } from "svelte/transition";

	// components
	import SvgSectionSelect from "$atoms/SvgSectionSelect.svelte";

	// stores
	import { navIsOpen } from "$stores/navStateStore";
	import { pageMode } from "$stores/viewportStore";
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

	// reactive variables
	$: $navIsOpen = $pageMode !== "narrow" ? false : $navIsOpen;

	// functions
	function toggleNav() {
		$navIsOpen = !$navIsOpen;
	}

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
	//- .bg-eerie
	//- 	p $pageMode: { $pageMode }
	//- 	p $navIsOpen: { $navIsOpen }
	//- 	p initialPageMode: { initialPageMode }
	.page-select-container.bg-eerie.sticky.h-16.top-0.z-50
		+if('["desktop", "grid-cols-2"].includes($pageMode)')
			.flex.gap-1.justify-around.items-end.px-8.py-3
				button.flex.justify-center.items-center(
					on:click!="{ previous }",
					style!="{ selectedIndex > 0 ? '' : 'visibility: hidden;' }"
				)
					SvgSectionSelect(direction="left")

				+each('sectionTitles as page')
					div(class="lg:w-[104px] lg:min-w-[104px] lg:h-10 lg:border-2 lg:border-blue-300")
						p.text-18.text-center(
							on:click!="{ () => mouseSelectPage(page) }",
							style!="{ $currentPage === page ? 'font-weight: 800; text-shadow: #93c5fd 1px 0 16px; font-size: 20px;' : 'font-weight: 200;' }"
						) { page }

				button.flex.justify-center.items-center(
					on:click!="{ next }",
					style!="{ selectedIndex < sectionTitles.length - 1 ? '' : 'visibility: hidden;' }"
				)
					SvgSectionSelect(direction="right")
			+else
				+if('!$navIsOpen')
					button.absolute.flex.w-32.justify-around.items-center.px-6.py-4(
						on:click!="{ () => toggleNav() }"
					) Menu
						SvgSectionSelect(direction="right")
					+else
						.w-60.bg-eerie.flex.flex-col.p-8(
							transition:fly!="{{ x: -200, duration: 500 }}"
						)
							+each('sectionTitles as page')
								button.absolute.top-0.right-0.flex.justify-center.items-center.w-8.h-8(
									on:click!="{ () => $navIsOpen = false }"
								) x
								div(class="lg:w-[104px] lg:min-w-[104px] lg:h-10 lg:border-2 lg:border-blue-300")
									p.text-18.text-center(
										on:click!="{ () => mouseSelectPage(page) }",
										style!="{ $currentPage === page ? 'font-weight: 700; text-shadow: #93c5fd 1px 0 16px; font-size: 20px;' : 'font-weight: 200;' }"
									) { page }</template>
