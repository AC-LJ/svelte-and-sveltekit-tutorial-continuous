<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// components
	import ButtonLink from "$atoms/ButtonLink.svelte";
	import Header from "$components/organisms/Header.svelte";
	import ExerciseContainer from "$components/organisms/ExerciseContainer.svelte";

	import Exercise1 from "$molecules/Exercise1.svelte";
	import Exercise2 from "$molecules/Exercise2.svelte";
	import Exercise3 from "$molecules/Exercise3.svelte";
	import Exercise4 from "$molecules/Exercise4.svelte";
	import Exercise5 from "$molecules/Exercise5.svelte";
	import Exercise6 from "$molecules/Exercise6.svelte";
	import Exercise7 from "$molecules/Exercise7.svelte";
	import Exercise8 from "$molecules/Exercise8.svelte";
	import Exercise9 from "$molecules/Exercise9.svelte";
	import Exercise10 from "$molecules/Exercise10.svelte";
	import Exercise11 from "$molecules/Exercise11.svelte";

	// functions

	function* backgroundRotator() {
		const colors = [
			"bg-red-100",
			"bg-blue-100",
			"bg-orange-100",
			"bg-purple-100",
		];

		let index = -1;

		while (true) {
			yield colors[++index % colors.length];
		}
	}

	const rotator = backgroundRotator();

	// types
	// import type { LayoutData } from "./$types";

	// catch data from layout function in +layout.ts
	// export let data: LayoutData;
	// console.log(data);
</script>

<template lang="pug">
	//- head
	svelte:head
		title Svelte tutorial completed with Lightning Jar's Svelte Pug Tailwind Typescript stack
		meta(
			content="A node starter template for the Svelte, Typescript, TailwindCSS, and Pug stack.",
			name="exercises"
		)

	//- body
	Header
	main
		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise1

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise2

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise3

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise4

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise5

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise6

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise7

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise8

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise9

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise10

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
			Exercise11

		ExerciseContainer(backgroundColor!="{ rotator.next().value }")
		ExerciseContainer(backgroundColor!="{ rotator.next().value }")

	footer

	span</template>
