<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import { get } from "svelte/store";

	// variables
	let value = `Some words are *italic*, some are ***bold***\n\n- lists\n- are\n- cool`;

	// functions
	function marked(text: string) {
		// function-scoped variables

		// helper functions

		function getTermIndices(stringToSearch: string, searchTerm: string) {
			const searchFrame = searchTerm.length;

			const termIndices = [];
			let bypass = 0;

			for (let i = 0; i < stringToSearch.length; i++) {
				if (bypass > 0) {
					bypass--;
				} else if (stringToSearch.slice(i, i + searchFrame) === searchTerm) {
					bypass = searchFrame - 1;
					termIndices.push(i);
				}
			}
			return termIndices;
		}

		function performReplacement(
			replacement: string,
			endPartOne: number,
			startPartTwo: number,
		) {
			const sliceOne = text.slice(0, endPartOne);
			const sliceTwo = text.slice(startPartTwo);
			console.log("sliceOne:", sliceOne);
			console.log("replacement:", replacement);
			console.log("sliceTwo:", sliceTwo);

			text = sliceOne + replacement + sliceTwo;
		}

		function parseEmAndStrong() {
			const localReplacementKey: Record<string, string> = {
				// Order of keys is important here. Otherwise, the ** will be interpreted as two *'s
				"**": "strong",
				"*": "em",
			};

			let replacement: string;

			for (let keyTerm of Object.keys(localReplacementKey)) {
				const termIndices = getTermIndices(text, keyTerm);

				if (termIndices.length % 2 !== 0) {
					termIndices.pop();
				}

				let seekingOpener = true;

				// running displacement tracks the change in length when a search term is replaced with an HTML tag
				let runningDisplacement = 0;

				for (let index of termIndices) {
					if (seekingOpener) {
						replacement = "<" + localReplacementKey[keyTerm] + ">";
					} else {
						replacement = "</" + localReplacementKey[keyTerm] + ">";
					}

					performReplacement(
						replacement,
						index + runningDisplacement,
						index + keyTerm.length + runningDisplacement,
					);

					runningDisplacement += replacement.length - keyTerm.length;
					seekingOpener = !seekingOpener;
				}
			}

			return;
		}

		function parseLists() {
			console.log("'Text' on entry to parseLists:", text);

			const localReplacementKey: Record<string, string> = {
				"\n-": "li",
				"\n": "ul",
			};

			let replacement = "";

			// First place the list item tags
			const itemTermIndices = getTermIndices(text, "\n-");
			// console.log("itemTermIndices:", itemTermIndices);
			let runningDisplacement = 0;

			for (let index of itemTermIndices) {
				if (itemTermIndices.indexOf(index) === 0) {
					replacement = "<" + localReplacementKey["\n-"] + ">";
				} else {
					replacement =
						"</" +
						localReplacementKey["\n-"] +
						"><" +
						localReplacementKey["\n-"] +
						">";
				}
				performReplacement(
					replacement,
					index + runningDisplacement,
					index + "\n-".length + runningDisplacement,
				);

				runningDisplacement += replacement.length - "\n-".length;
			}

			// Then place the unordered list tags (this is totally ad hock)
			runningDisplacement = 0;

			if (
				!text.includes("<ul>") ||
				text.indexOf("<ul>") > text.lastIndexOf("<li>")
			) {
				performReplacement("<ul>", text.indexOf("<li>"), text.indexOf("<li>"));
				runningDisplacement += "<ul>".length;
			}

			if (
				!text.includes("</ul>") ||
				text.lastIndexOf("<ul>") > text.lastIndexOf("</ul>")
			) {
				text += "</li></ul>";
			}

			console.log("'Text' on exit from parseLists:", text);
		}

		function parseParagraphs() {}

		// execution sequence
		parseEmAndStrong();
		parseLists();
		return text;
	}
</script>

<template lang="pug">
	ExerciseHeader(
		section="Bindings",
		startNumber=31,
		topic="Text inputs"
	)

	.text-field-container.grid.gap-6.mt-6(class="grid-cols-[5em_1fr]")
		p input
		textarea.flex.flex-grow(bind:value!="{ value }")

		p output
		div {  @html marked(value)  }</template>

<style>
	.grid {
		display: grid;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
	}

	textarea {
		flex: 1;
		resize: none;
	}
</style>
