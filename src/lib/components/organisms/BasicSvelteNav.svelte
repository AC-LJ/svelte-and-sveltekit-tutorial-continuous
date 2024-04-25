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
		//- if the viewport is 768px or wider, show the desktop nav
		+if('["desktop", "grid-cols-2"].includes($pageMode)')
			button.move-topic-selection-left(
				class=`
						flex
						items-center
						justify-center
				`
				on:click!="{ previous }",
				style!="{ selectedIndex > 0 ? '' : 'visibility: hidden;' }"
			)
				SvgSectionSelect(direction="left")

			+each('basicSectionTitles as page')
				.topic-button-container(
					class=`
							flex
							justify-center
					`
					style!="{`width: ${page.length * 6 + 44}px`}"
				)
					ButtonNavItem(
						onClick!="{ () => handlePageButtonClick(page) }",
						page!="{ page }"
					)

			button.move-topic-selection-right(
				class=`
						flex
						items-center
						justify-center
				`
				on:click!="{ next }",
				style!="{ selectedIndex < basicSectionTitles.length - 1 ? '' : 'visibility: hidden;' }"
			)
				SvgSectionSelect(direction="right")

			//- if the viewport is less than 768px...
			+else
				+if('!$mobileNavIsOpen')
					button.menu-opener(
						class=`
								absolute
								border
								border-primary
								flex
								items-center
								justify-center
								left-8
								p-3
								rounded-lg

								md:hidden
						`
						on:click!="{ () => toggleNav() }",
						transition:fly!="{{ x: -500, duration: 500 }}"
					)
						SvgHamburger
					+else
						.fly-in-menu-container(
							class=`
									absolute
									flex
									max-w-xl
									mx-8

									md:hidden
							`
							transition:fly!="{{ x: 500, duration: 700 }}"
						)
							.topic-buttons-group-container(
								class=`
										flex
										flex-wrap
										h-24
										justify-center
										pt-1
								`
								)
								+each('basicSectionTitles as page')
									ButtonNavItem(
										onClick!="{ () => handlePageButtonClick(page) }",
										page!="{ page }"
									)

							.menu-closer-container(
								class=`
										relative
										shrink-0
										w-10
								`
								)
								button.menu-closer(
									class=`
											absolute
											border
											border-primary
											flex
											h-7
											items-center
											justify-center
											p-1
											right-0
											rounded-lg
											top-3
											w-7

									 		transition-colors 
											duration-200 
											ease-in-out 
											
											hover:bg-primary 
											hover:bg-opacity-40
									`
									on:click!="{ () => ($mobileNavIsOpen = false) }"
								) 
									SvgCloseSymbol
</template>
