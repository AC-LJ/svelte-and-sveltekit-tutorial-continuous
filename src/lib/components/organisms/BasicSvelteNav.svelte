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
		console.log(
			"onclick function in BasicSvelteNav says: $currentPage is",
			$currentPage,
		);
		selectedIndex = basicSectionTitles.indexOf(page);
		$currentPage = page;
	}
</script>

<template lang="pug">
	nav.box-content.flex.items-center.sticky.h-24.px-8.top-0.z-50.mx-auto.bg-eerie.border-t.border-b-2.border-primary(
		class="max-w-[1800px]"
	)
		+if('["desktop", "grid-cols-2"].includes($pageMode)')
			.flex.gap-1.justify-around.items-end.px-8.py-3
				button.flex.justify-center.items-center(
					on:click!="{ previous }",
					style!="{ selectedIndex > 0 ? '' : 'visibility: hidden;' }"
				)
					SvgSectionSelect(direction="left")

				+each('basicSectionTitles as page')
					div(class="lg:w-[104px] lg:min-w-[104px] lg:h-10 lg:border-2 lg:border-blue-300")
						button.text-18.text-center(
							on:click!="{ (page) => handlePageButtonClick }",
							style!="{ $currentPage === page ? 'font-weight: 800; text-shadow: #93c5fd 1px 0 16px; font-size: 20px;' : 'font-weight: 200;' }"
						) { page }

				button.flex.justify-center.items-center(
					on:click!="{ next }",
					style!="{ selectedIndex < basicSectionTitles.length - 1 ? '' : 'visibility: hidden;' }"
				)
					SvgSectionSelect(direction="right")
			+else
				+if('!$mobileNavIsOpen')
					button.flex.justify-center.items-center.p-3.border.border-primary.rounded-lg(
						on:click!="{ () => toggleNav() }",
						transition:fly!="{{ x: -500, duration: 500 }}"
					)
						SvgHamburger
					+else
						.h-fit.w-full.flex.flex-wrap.justify-center.items-center.gap-2(
							transition:fly!="{{ x: 500, duration: 500 }}"
						)
							+each('basicSectionTitles as page')
								ButtonNavItem(
									onClick!="{ () => handlePageButtonClick(page) }",
									page!="{ page }"
								)

							button.absolute.top-2.right-3.flex.justify-center.p-1.border-2.border-primary.rounded-lg(
								on:click!="{ () => ($mobileNavIsOpen = false) }"
							) 
								SvgCloseSymbol</template>
