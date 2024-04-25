<script lang="ts">
	import { page } from "$app/stores";
	import { fade, fly } from "svelte/transition";

	// components
	import SvgSectionSelect from "$atoms/SvgSectionSelect.svelte";
	import SvgHamburger from "$atoms/SvgHamburger.svelte";
	import SvgCloseSymbol from "$atoms/SvgCloseSymbol.svelte";
	import ButtonNavItem from "$atoms/ButtonNavItem.svelte";

	// stores
	import { mobileNavIsOpen } from "$stores/navStateStore";
	import { pageMode } from "$stores/viewportStore";
	import { currentPage } from "$stores/paginationStore";

	// variables
	const basicSectionTitles: string[] = [
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
	$currentPage = basicSectionTitles[selectedIndex];

	// reactive variables
	$: $mobileNavIsOpen = $pageMode !== "narrow" ? false : $mobileNavIsOpen;

	// functions
	function toggleNav() {
		$mobileNavIsOpen = !$mobileNavIsOpen;
	}

	function previous() {
		selectedIndex = selectedIndex === 0 ? 0 : selectedIndex - 1;
		$currentPage = basicSectionTitles[selectedIndex];
	}

	function next() {
		selectedIndex =
			selectedIndex === basicSectionTitles.length - 1
				? basicSectionTitles.length - 1
				: selectedIndex + 1;
		$currentPage = basicSectionTitles[selectedIndex];
	}

	function handlePageButtonClick(page: string) {
		selectedIndex = basicSectionTitles.indexOf(page);
		$currentPage = page;
	}
</script>

<template lang="pug">
	nav(
		class=`
			bg-eerie 
			border-b-2 
			border-primary 
			border-t 
			box-content 
			flex 
			h-24 
			items-center
			justify-center 
			max-w-[1800px] 
			mx-auto 
			relative 
			sticky 
			top-0 
			z-50
			md:box-border
			md:px-8 
			`
	)
		+if('["desktop", "grid-cols-2"].includes($pageMode)')
			button.flex.justify-center.items-center(
				on:click!="{ previous }",
				style!="{ selectedIndex > 0 ? '' : 'visibility: hidden;' }"
			)
				SvgSectionSelect(direction="left")

			+each('basicSectionTitles as page')
				.flex.justify-center(
					style!="{`width: ${page.length * 6 + 44}px`}"
				)
					ButtonNavItem(
						onClick!="{ () => handlePageButtonClick(page) }",
						page!="{ page }"
					)

			button.flex.justify-center.items-center(
				on:click!="{ next }",
				style!="{ selectedIndex < basicSectionTitles.length - 1 ? '' : 'visibility: hidden;' }"
			)
				SvgSectionSelect(direction="right")
			+else
				+if('!$mobileNavIsOpen')
					button.absolute.left-8.flex.justify-center.items-center.p-3.border.border-primary.rounded-lg(
						on:click!="{ () => toggleNav() }",
						transition:fly!="{{ x: -500, duration: 500 }}"
					)
						SvgHamburger
					+else
						.right-fly-panel.absolute.mx-8.flex.max-w-xl(
							transition:fly!="{{ x: 500, duration: 700 }}"
						)
							.h-24.flex.flex-wrap.justify-center.pt-1
								+each('basicSectionTitles as page')
									ButtonNavItem(
										onClick!="{ () => handlePageButtonClick(page) }",
										page!="{ page }"
									)

							.relative.w-10.shrink-0
								button.absolute.top-3.right-0.flex.items-center.justify-center.h-7.w-7.p-1.border.border-primary.rounded-lg(
									class="transition-colors duration-200 ease-in-out hover:bg-primary hover:bg-opacity-40"
									on:click!="{ () => ($mobileNavIsOpen = false) }"
								) 
									SvgCloseSymbol
</template>
