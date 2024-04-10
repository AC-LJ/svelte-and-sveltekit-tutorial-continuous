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
	import Exercise12 from "$molecules/Exercise12.svelte";
	import Exercise13Thru15 from "$components/molecules/Exercise13Thru15.svelte";
	import Exercise16 from "$molecules/Exercise16.svelte";
	import Exercise17 from "$molecules/Exercise17.svelte";
	import Exercise18 from "$molecules/Exercise18.svelte";
	import Exercise19Thru21 from "$components/molecules/Exercise19Thru21.svelte";
	import Exercise22 from "$components/molecules/Exercise22.svelte";
	import Exercise23 from "$components/molecules/Exercise23A_Parent.svelte";
	import Exercise24 from "$components/molecules/Exercise24A_Parent.svelte";
	import Exercise25 from "$components/molecules/Exercise25A_Parent.svelte";
	import Exercise26 from "$components/molecules/Exercise26.svelte";
	import Exercise27 from "$components/molecules/Exercise27.svelte";
	import Exercise28 from "$components/molecules/Exercise28.svelte";
	import Exercise29 from "$components/molecules/Exercise29.svelte";
	import Exercise30 from "$components/molecules/Exercise30.svelte";
	import Exercise30Riff from "$components/molecules/Exercise30Riff.svelte";
	import Exercise31 from "$components/molecules/Exercise31.svelte";
	import Exercise32 from "$components/molecules/Exercise32.svelte";
	import Exercise33 from "$components/molecules/Exercise33.svelte";
	import Exercise34 from "$components/molecules/Exercise34.svelte";
	import Exercise35Thru36A from "$components/molecules/Exercise35Thru36A.svelte";
	import Exercise37Thru38 from "$components/molecules/Exercise37Thru38.svelte";
	import Exercise39 from "$components/molecules/Exercise39.svelte";
	import Exercise40 from "$components/molecules/Exercise40.svelte";

	// variables
	const chapters = {
		0: "basic",
		1: "advanced",
	};

	// functions

	function* backgroundRotator() {
		const colors = [
			"bg-engineering",
			"bg-viridian",
			"bg-primary",
			"bg-parchment",
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
			content="A self-contained, exercise-by-exercise demonstration of the tutorial at https://learn.svelte.dev/tutorial/",
			name="exercises"
		)

	//- body
	Header
	main
		.grid.grid-cols-1.gap-5.px-8.py-6.m-auto(
			class="max-w-[1800px] lg:grid-cols-2 3xl:grid-cols-3"
		)
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
				Exercise12

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise13Thru15

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise16

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise17

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise18

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise19Thru21

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise22

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise23

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise24

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise25

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise26

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise27

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise28

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise29

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise30

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise30Riff

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise31

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise32

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise33

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise34

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise35Thru36A

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise37Thru38

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise39

			ExerciseContainer(backgroundColor!="{ rotator.next().value }")
				Exercise40

	footer

	span</template>
