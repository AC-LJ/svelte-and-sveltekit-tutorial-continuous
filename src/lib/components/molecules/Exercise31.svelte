<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	// variables
	let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`;

	// functions
	function marked(text: string) {
		// function-scoped variables

		const theSplitTextArray: string[] = text
			.split(/(\s+|\*{1,2}|\n-)/)
			.filter(Boolean);

		console.log(theSplitTextArray);

		const simplePairReplacementKey: Record<string, string> = {
			"*": "em",
			"**": "strong",
		};

		// helper functions

		function findAndReplaceSimplePairs(searchTerm: string) {
			let seekingOpener = true;
			let openingIndex: number | undefined;
			let closingIndex: number | undefined;

			for (let i = 0; i < theSplitTextArray.length; i++) {
				if (seekingOpener && theSplitTextArray[i] === searchTerm) {
					openingIndex = i;
					seekingOpener = false;
				} else if (!seekingOpener && theSplitTextArray[i] === searchTerm) {
					seekingOpener = true;
					closingIndex = i;
					if (openingIndex !== undefined) {
						theSplitTextArray[
							openingIndex
						] = `<${simplePairReplacementKey[searchTerm]}>`;
						theSplitTextArray[
							closingIndex
						] = `</${simplePairReplacementKey[searchTerm]}>`;
					}
				}
			}
		}

		function wrapListsAndItems() {
			let ulIsOpen = false;

			for (let i = 0; i < theSplitTextArray.length; i++) {
				if (!ulIsOpen && theSplitTextArray[i] === "\n-") {
					ulIsOpen = true;
					theSplitTextArray[i] = "<ul><li>";
				} else if (ulIsOpen) {
					if (
						theSplitTextArray[i] === "\n-" &&
						i < theSplitTextArray.length - 1
					) {
						theSplitTextArray[i] = "</li><li>";
					} else if (
						theSplitTextArray[i] === "\n-" &&
						i === theSplitTextArray.length - 1
					) {
						theSplitTextArray[i] = "</li></ul>";
					}
				}
			}
		}

		// execution sequence
		for (const key of Object.keys(simplePairReplacementKey)) {
			findAndReplaceSimplePairs(key);
		}

		return theSplitTextArray.join("");
	}

	let string = marked(value);
</script>

<template lang="pug">
	ExerciseHeader(
		section="Bindings",
		startNumber=31,
		topic="Text inputs"
	)

	.text-field-container.grid.gap-6.mt-6(class="grid-cols-[5em_1fr]")
		p input
		textarea.flex.flex-grow({value})

		p output
		div {  @html string  }</template>
